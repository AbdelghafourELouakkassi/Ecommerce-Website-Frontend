import { Box, Button, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../redux/cartState/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Categories from "./Categories";
import { useQuery, gql } from "@apollo/client";

function Products() {
  const productsQuery = gql`
    {
      products {
        id
        price
        title
        image {
          url
        }
        categories {
          title
        }
      }
    }
  `;

  const selectedCategory = useSelector((state) => state.category);

  let filterSet = new Set(selectedCategory);

  const { data: products, loading, error } = useQuery(productsQuery);
  
  let productsdata;

  if (products && selectedCategory.length === 0) {
    productsdata = products.products;
  } else if (products && selectedCategory.length !== 0) {
    productsdata = products.products.filter((product) =>
      filterSet.has(product.categories[0].title)
    );
  }

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Typography textAlign={"center"} sx={{ 
          fontSize:{xs:20,sm:35}
         }} my={4} >
          Our Products
        </Typography>
        <Stack 
         sx={{ 
          flexDirection:{xs:"column",sm:"row"}
           }} >
          <Categories />
          <Stack
            sx={{
              display: "flex",
              flexDirection:{xs:"row",sm:"row"},
              flexWrap: {xs:"wrap",sm:"wrap"},
              justifyContent: "center",
              alignItems: "center",
              gap:{xs:5,sm:5},
              mt:{xs:4,sm:1}
            }}
            mb={4}
          >
            {products &&
              productsdata.map((ProductItem) => {   
                return (
                  <Box
                    
                    key={ProductItem.id}
                    mb={7}
                    mt={2}
                    sx={{ 
                      width:{xs:"150px",sm:"276.33px"},
                      height:{xs:"190px",sm:"342.17px"}
                     }}
                  >
                    <img
                      src={ProductItem.image.url}
                      width={"95%"}
                      height={"80%"}
                      alt="card-image"
                    />
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      gap={2}
                    >
                      <Typography color={"#999999"}>
                        {ProductItem.title}
                      </Typography>
                      <Stack direction={"row"} alignItems={"center"}>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              addToCart({
                                id: ProductItem.id,
                                title: ProductItem.title,
                                image: ProductItem.image.url,
                                quantity: 1,
                                price: ProductItem.price,
                              })
                            );
                          }}
                        >
                          <AddShoppingCartIcon sx={{ color: "gray" }} />
                        </Button>
                      </Stack>
                    </Stack>
                    <Typography>{ProductItem.price} $</Typography>
                  </Box>
                );
              })}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Products;
