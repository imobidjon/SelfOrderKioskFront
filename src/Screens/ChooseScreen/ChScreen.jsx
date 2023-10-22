import { Box, Card, CardContent, Grid } from "@mui/material";
import React, { useContext } from "react";
import Image1 from "../../assets/images/ChScreen1.png";
import Image2 from "../../assets/images/ChScreen2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../Store";
import { setOrderType } from "../../actions";
import { useNavigate } from "react-router-dom";

export default function ChScreen(props) {
  const { dispatch } = useContext(Store);
  const navigate = useNavigate();

  const handlerChoose = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate("/paymethod");
  };

  AOS.init();

  return (
    <div className="bgColor">
      <div className="title pt-3">
        <div className="centerStyle">
          <img width={"60%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <p className="mb-5" data-aos="zoom-out-up">
          Bugun qayerda ovqatlanasiz?
        </p>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Eat In")}
                data-aos="fade-right"
                sx={{
                  textAlign: "center",
                  maxWidth: "200px",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                <CardContent>
                  <img src={Image1} width={"100%"} alt="ChScreen1" />
                    <p className="fs-2  mt-2 mb-0 pb-0">Ichkarida ovqatlanish</p>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose("Take Out")}
                data-aos="fade-left"
                sx={{
                  textAlign: "center",
                  maxWidth: "200px",
                  height: "100%",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                <CardContent>
                  <img src={Image2} width={"100%"} alt="ChScreen1" />
                  <p className="fs-3  mt-3 mb-0 pb-0">O’zi bilan olib ketish</p>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
