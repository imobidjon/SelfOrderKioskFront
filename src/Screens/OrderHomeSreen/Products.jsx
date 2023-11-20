import {
  Alert,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { setProductList, setSelectedProduct } from "../../actions";
import { Store } from "../../Store";

export default function Products({ setOpen, categoryName, itemsCount }) {
  const { state, dispatch } = useContext(Store);
  const { products, loading, error } = state.ProductList;

  useEffect(() => {
    setProductList(dispatch);
  }, [dispatch]);

  const ProductClickHandler = (id) => {
    const selectedProduct = products.find((product) => product._id === id);
    setSelectedProduct(dispatch, selectedProduct);
    setOpen(true);
  };

  return (
    <Box sx={itemsCount? {pb:27, mt: 1} : {pb:2, mt: 1 }}>
      <Box>
        <Typography className="ProductsTitle">{categoryName === "" ? "Barchasi" : categoryName}</Typography>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt:2
          }}
        >
          <div className="text-center">
            <div className="lds-ripple">
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
          <Grid container columns={12} spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.name}>
                <div className="card h-100" onClick={() => ProductClickHandler(product._id)} style={{border: '1px solid #772C1E', borderRadius: '20px'}} >
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <img
                      src={product.image}
                      style={{
                        maxWidth: "100%",
                        width: "200px",
                      }}
                      alt={product.image}
                    />
                  </div>
                  <div className="card-footer text-center">
                    <h2 className="ProductName">{product.name}</h2>
                    <p className="ProductPrice">
                      <span className="text-dark">Narxi:</span> {product.price}{" "}
                      so'm
                    </p>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}
