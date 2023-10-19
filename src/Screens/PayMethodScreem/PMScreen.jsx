import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Money from "../../assets/images/money.png";
import CreditCard from "../../assets/images/creditCard.png";
import "./PMScreen.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../Store";
import { setPayMethod } from "../../actions";
import { useNavigate } from "react-router-dom";

export default function PMScreen(props) {
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();

  const handlerChoose = (payMethod) => {
    setPayMethod(dispatch, payMethod);
    navigate("/order-home");
  };

  AOS.init();

  return (
    <div className="bgColor">
      <div className="title pt-3">
        <h1 data-aos="zoom-out-down">obi roxat kafe</h1>
        <p className="mb-5" data-aos="zoom-out-up">
          Qaysi usulda to'lov qilasiz?
        </p>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Cash")}
                data-aos="fade-right"
                sx={{
                  textAlign: "center",
                  maxWidth: "400px",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                <CardContent>
                  <img src={Money} alt="Money" />
                  <Typography
                    variant="body2"
                    className="textStyle"
                    color="text.dark"
                  >
                    naqd pul to’lash
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Card")}
                data-aos="fade-left"
                sx={{
                  textAlign: "center",
                  maxWidth: "400px",
                  height: "100%",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                <CardContent>
                  <img src={CreditCard} alt="CreditCard" />
                  <Typography
                    variant="body2"
                    className="textStyle pt-4"
                    color="text.dark"
                  >
                    Karta orqali to’lash
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
