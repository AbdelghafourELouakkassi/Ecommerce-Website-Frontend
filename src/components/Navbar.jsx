import {
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";



export default function NavbarUi() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const CountProductsFromCart = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Stack
        bgcolor={"black"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#ffffff"}
        px={20}
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          height: { xs: "110px", sm: "46px" },
          py: { xs: "10px", sm: "0px" },
        }}
      >
        <Box>
          <Typography
            fontSize={15}
            textAlign={"center"}
            fontFamily={"Nunito Sans"}
            sx={{
              width: { xs: "200px", sm: "100%" },
            }}
          >
            Free shipping 30-day return of refund guarantee 
          </Typography>
        </Box>
      </Stack>
      <Container
        bgcolor={"#ffffff"}
        height={84}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 0 },
          justifyContent: "space-between",
          alignItems: "center",
          my: 4,
        }}
      >
        <Box fontSize={28}>MyStore</Box>
        <Box>
          <Stack direction={"row"} gap={3} fontSize={22} sx={{mr:{xs:0,sm:7} }}  >
            <NavLink style={{ color: "black", textDecoration: "none" }} to="/">
              <Typography fontFamily={"Nunito Sans"} fontSize={22}>
                Home
              </Typography>
            </NavLink>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to="/Contact"
            >
              <Typography fontFamily={"Nunito Sans"} fontSize={22}>
                Contact
              </Typography>
            </NavLink>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={"/About"}
            >
              <Typography fontFamily={"Nunito Sans"} fontSize={22}>
                About
              </Typography>
            </NavLink>
          </Stack>
        </Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Badge badgeContent={CountProductsFromCart} color="info">
            <Link to={"/Cart"}>
              {" "}
              <Button sx={{ color: "black", mr: "-12px" }}>
                <ShoppingCartIcon />
              </Button>
            </Link>
          </Badge>
        </Box>
      </Container>
    </>
  );
}
