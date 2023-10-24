import React, { useContext, useEffect } from "react";
import { Store } from "../../Store";
import { createOrder } from "../../actions";
import { Alert, Box, Button, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

export default function CScreen() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { order } = state;
  const { loading, error, newOrder } = state.orderCreate;

  useEffect(() => {
    if (order.orderItems.length > 0) {
      createOrder(dispatch, order);
    }
  }, [order, dispatch]);

  return (
    <div>
      <div className="title pt-3">
        <div className="centerStyle">
          <img width={"30%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <p className="mb-2 mx-3">Biz sizning buyurtmangizni tayyorlamoqdamiz</p>
      </div>
      <Box>
        {loading ? (
          <CircularProgress></CircularProgress>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Typography
              sx={{ textAlign: "center", textTransform: "uppercase" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              Iltimos biroz kuting!
            </Typography>
            <Box sx={{ textAlign: "center", position: "relative" }}>
              <img
                src={"/images/receiptPaper.png"}
                alt="receiptPaper"
                width={"50%"}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 70,
                  left: 205,
                }}
              >
                <Typography
                  sx={{ textAlign: "center", textTransform: "uppercase" }}
                  gutterBottom
                  component="p"
                  style={{ fontSize: "12px" }}
                >
                  Sizning buyurtma raqamingiz:
                </Typography>
                <h1 style={{ fontSize: "200px", fontWeight: "bolder" }}>
                  {newOrder.number}
                </h1>
              </Box>
            </Box>

            <Box sx={{mx:15, mt:5}}>
              <Button
                onClick={() => navigate(`/`)}
                startIcon={<ArrowBack />}
                variant="contained"
                sx={{
                  background: "#772C1E",
                  borderRadius: "13px",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#b74c3a",
                    borderColor: "#0062cc",
                    boxShadow: "none",
                  },
                }}
              >
                Yana Buyurtma Bering
              </Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}
