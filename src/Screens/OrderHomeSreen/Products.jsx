import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
// import Burger from "../../assets/images/Burger.png";
import { AddCircle } from "@mui/icons-material";
import { setProductList } from "../../actions";
import { Store } from "../../Store";

export default function Products() {
  const { state, dispatch } = useContext(Store);
  const { products, loading, error } = state.ProductList;

  useEffect(() => {
    setProductList(dispatch);
  }, [dispatch]);


  return (
    <Box sx={{ mt: 10 }}>
      <Box>
        <Typography className="ProductsTitle">Barchasi</Typography>
      </Box>
      <Grid container columns={10} spacing={2}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {products.map((product) => (
              <Grid item xs={2} key={product.name}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(118deg, rgba(126, 62, 190, 0.22) 32.67%, rgba(126, 62, 190, 0.19) 85.65%);",
                    borderRadius: "20px",
                    mt: 4,
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <div>
                      <img src={product.image} width={"100%"} alt="productBurger" />
                    </div>
                  </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: "20px 15px 0 15px",
                        }}
                    >
                        <Box>
                        <Typography className="ProductName">
                            {product.name}
                        </Typography>
                        <Typography className="ProductPrice">
                            <span className="text-dark">Narxi:</span> {product.price} so'm
                        </Typography>
                        </Box>
                        <Box>
                        <AddCircle sx={{ color: "#7E3EBE", fontSize: "50px" }} />
                        </Box>
                    </Box>
                </Box>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}
