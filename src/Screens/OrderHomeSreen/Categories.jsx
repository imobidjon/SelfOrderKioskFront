import {
  Alert,
  Box,
  Divider,
  CircularProgress,
  Drawer,
  // Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";
import { setCategoryList, setProductList } from "../../actions";

export default function Categories() {
  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.CategoryList;
  const [categoryName, setcategoryName] = useState("");

  useEffect(() => {
    if (!categories) {
      setCategoryList(dispatch);
    } else {
      setProductList(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setcategoryName(name);
    setProductList(dispatch, name);
  };

  const drawer = (
    <div className="text-center">
      <Box
        onClick={() => categoryClickHandler("")}
        sx={{
          width: "120px;",
          height: "120px;",
        }}
      >
        <img width={"100%"} src={"/images/logo.png"} alt={"sss"} />
      </Box>
      <Divider sx={{ borderWidth: "2px", borderColor: "#772C1E" }} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          {categories.map((category) => (
            <Box
              key={category.name}
              onClick={() => categoryClickHandler(category.name)}
              sx={{
                width: "70px;",
                height: "70px;",
                m: 3,
              }}
            >
              <Box
                sx={
                  category.name === categoryName
                    ? {
                        background: "#772C1E",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        height: "100%",
                      }
                    : {
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "15px",
                        height: "100%",
                      }
                }
              >
                <img
                  width={"100%"}
                  src={category.image}
                  alt={category.name}
                />
              </Box>
              <Typography fontWeight={"bolder"}>{category.name}</Typography>
            </Box>
          ))}
        </>
      )}
    </div>
  );

  return (
    <div>
      <Drawer
        variant="permanent"
        open
        sx={{
          "& .MuiDrawer-paper": {
            borderRight: "solid #772C1E",
          },
        }}
      >
        {drawer}
      </Drawer>
      {/* <Grid container columns={10} sx={{ mt: 2 }} spacing={3}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            {categories.map((category) => (
              <Grid item xs={1} key={category.name}>
                <Box
                  onClick={() => categoryClickHandler(category.name)}
                  sx={{
                    width: "92px;",
                    height: "92px;",
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={
                      category.name === categoryName
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
              </Grid>
            ))}
          </>
        )}
      </Grid> */}
    </div>
  );
}
