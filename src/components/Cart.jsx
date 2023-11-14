import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Stack, Typography, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  emptyCart,
  addQuantity,
  removeQuantity,
} from "../redux/cartState/cartSlice";

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const Stripe_Pk = import.meta.env.VITE_STRIPE_PK;

  const Backend_Api = import.meta.env.VITE_STRIPE_BACKEND_API;

  const makePayment = async () => {
    setLoading(true);
    const stripe = await loadStripe(`${Stripe_Pk}`);

    const body = {
      products: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(`${Backend_Api}/payment`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "30px" }}>
          No item In The Cart
        </div>
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Box height={300} width={"100%"} overflow={"scroll"}>
              <Table
                sx={{
                  minWidth: { xs: 1000, sm: 650 },
                  overflow: { xs: "scroll", sm: "none" },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">
                      <Typography >
                        Description
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>Quantity</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>Remove</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography>Price</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((product) => {
                    return (
                      <TableRow key={product.id}>
                        <TableCell width={"25%"}>
                          <Stack direction={"row"}>
                            <Box mx={4}>
                              <img
                                src={product.image}
                                width={100}
                                height={100}
                                alt=""
                              />
                            </Box>
                            <Stack justifyContent={"center"}>
                              <Typography>{product.title}</Typography>
                            </Stack>
                          </Stack>
                        </TableCell>
                        <TableCell width={"25%"}>
                          <Stack
                            direction={"row"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            gap={0}
                            color={"black"}
                          >
                            <button
                              onClick={() => {
                                dispatch(addQuantity({ id: product.id }));
                              }}
                            >
                              <Typography
                                bgcolor={"#0a063d"}
                                px={2}
                                py={1}
                                color={"white"}
                                borderRadius={1}
                              >
                                +
                              </Typography>
                            </button>
                            <Typography px={2} py={1} borderRadius={1} mx={-13}>
                              {product.quantity}
                            </Typography>
                            <button
                              onClick={() => {
                                dispatch(removeQuantity({ id: product.id }));
                              }}
                            >
                              <Typography
                                bgcolor={"lightgray"}
                                px={2}
                                py={1}
                                color={"black"}
                                borderRadius={1}
                              >
                                -
                              </Typography>
                            </button>
                          </Stack>
                        </TableCell>
                        <TableCell width={"25%"}>
                          <Stack direction={"row"} justifyContent={"center"}>
                            <button
                              onClick={() => {
                                dispatch(removeItem({ id: product.id }));
                              }}
                            >
                              <Typography
                                px={2}
                                py={1}
                                color={"black"}
                                borderRadius={1}
                                bgcolor={"lightgray"}
                              >
                                x
                              </Typography>
                            </button>
                          </Stack>
                        </TableCell>
                        <TableCell width={"25%"}>
                          <Stack direction={"row"} justifyContent={"center"}>
                            <Typography
                              px={2}
                              py={1}
                              color={"black"}
                              borderRadius={1}
                              mx={-13}
                            >
                              {product.price} $
                            </Typography>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={4}
            gap={4}
            mx={8}
          >
            <Typography> Total:{total} $</Typography>
            <button onClick={makePayment}>
              <Typography
                bgcolor={"#0a063d"}
                p={1.5}
                borderRadius={2}
                color={"lightgray"}
              >
                {loading ? "loading..." : "Checkout"}
              </Typography>
            </button>
            <button
              onClick={() => {
                dispatch(emptyCart());
              }}
            >
              <Typography
                bgcolor={"#a80b0b"}
                p={1.5}
                borderRadius={2}
                color={"lightgray"}
              >
                Empty Cart
              </Typography>
            </button>
          </Stack>
        </div>
      )}
    </>
  );
}

export default Cart;
