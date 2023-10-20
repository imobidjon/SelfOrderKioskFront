import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
// import Burger from "../../assets/images/Burger.png";
import { AddCircle } from "@mui/icons-material";
import { setProductList, setSelectedProduct } from "../../actions";
import { Store } from "../../Store";

export default function Products({ setOpen }) {
  const { state, dispatch } = useContext(Store);
  const { products, loading, error } = state.ProductList;


  useEffect(() => {
    setProductList(dispatch);
  }, [dispatch]);

  const ProductClickHandler = (id) => {
    const selectedProduct = products.find((product) => product._id === id)
    setSelectedProduct(dispatch, selectedProduct)
    setOpen(true)
  }

  return (
    <Box sx={{ mt: 10 }}>
      <Box>
        <Typography className="ProductsTitle">Barchasi</Typography>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-center">
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
            <p style={{ fontFamily: "Poppins" }}>Mahsulotlar yuklanmoqda</p>
          </div>
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <Grid container columns={10} spacing={2}>
            {products.map((product) => (
              <Grid item xs={2} key={product.name}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(118deg, rgba(126, 62, 190, 0.22) 32.67%, rgba(126, 62, 190, 0.19) 85.65%);",
                    borderRadius: "20px",
                    mt: 4,
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <img
                        src={product.image}
                        width={"100%"}
                        alt="productBurger"
                      />
                    </div>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: "20px 10px 0 15px",
                    }}
                  >
                    <Box>
                      <Typography className="ProductName">
                        {product.name}
                      </Typography>
                      <Typography className="ProductPrice">
                        <span className="text-dark">Narxi:</span>{" "}
                        {product.price} so'm
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <AddCircle
                          onClick={() => ProductClickHandler(product._id)}
                          sx={{ color: "#7E3EBE", fontSize: "50px" }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
