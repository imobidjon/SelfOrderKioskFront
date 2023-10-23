import { Box, Card, CardContent, Grid } from "@mui/material";
import React, { useContext } from "react";
import Money from "../../assets/images/money.png";
import CreditCard from "../../assets/images/creditCard.png";
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
        <div className="centerStyle">
          <img width={"60%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <p className="mb-5" data-aos="zoom-out-up">
          Qaysi usulda to'lov qilasiz?
        </p>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Cash")}
                data-aos="fade-right"
                sx={{
                  textAlign: "center",
                  maxWidth: "200px",
                  borderRadius: 8,
                  padding: 3,
                  border: '2px solid #772C1E'

                }}
              >
                <CardContent>
                  <img src={Money} width={"100%"} alt="Money" />
                  <p className="fs-2  mt-2 mb-0 pb-0" style={{color: '#772C1E'}}>Naqd pul to’lash</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Card")}
                data-aos="fade-left"
                sx={{
                  textAlign: "center",
                  maxWidth: "200px",
                  height: "100%",
                  borderRadius: 8,
                  padding: 3,
                  border: '2px solid #772C1E'

                }}
              >
                <CardContent>
                  <img src={CreditCard} width={"100%"} alt="CreditCard" />
                  <p className="fs-4 mt-3 mb-0 pb-0" style={{color: '#772C1E'}}>Karta orqali to’lash</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
