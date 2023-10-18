import { Alert, Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
// import bgImage1 from "../../assets/images/hpageimg1.png";
import { Store } from "../../Store";
import { setCategoryList } from "../../actions";
import { NavLink, useLocation } from "react-router-dom";

export default function Categories() {
  const location = useLocation();
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.CategoryList;
  useEffect(() => {
    setCategoryList(dispatch);
  }, [dispatch]);

  return (
    <div>
      <Grid container columns={10} sx={{ mt: 2 }} spacing={3}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {categories.map((category) => (
              <Grid item xs={1} key={category.name}>
                 <NavLink to={`/order-home/${category.name}`} className={'text-dark text-decoration-none'} >
                    <Box
                    sx={{
                        width: "92px;",
                        height: "92px;",
                        textAlign: "center",
                    }}
                    >
                    <Box
                        sx={
                        category.name === location.pathname.slice(12)
                            ? {
                                background: "#7E3EBE",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                height: "100%",
                            }
                            : {
                                background: "#E2DBEA",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                height: "100%",
                            }
                        }
                    >
                        <img width={100} src={category.image} alt={category.name} />
                    </Box>
                    <Typography>{category.name}</Typography>
                    </Box>
                 </NavLink>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </div>
  );
}
