import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import Image1 from "../../assets/images/ChScreen1.png";
import Image2 from "../../assets/images/ChScreen2.png";
import "./ChScreen.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Store } from "../../Store";
import { setOrderType } from "../../actions";
import { useNavigate } from "react-router-dom";

export default function ChScreen(props) {
  const { dispatch } = useContext(Store)
  const navigate = useNavigate();

  const handlerChoose = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate('/paymethod')
  }

  AOS.init();

  return (
    <div className="bgColor">
      <div className="title pt-3">
        <h1
          data-aos="zoom-out-down"
        >
          obi roxat kafe
        </h1>
        <p className="mb-5" data-aos="zoom-out-up">Bugun qayerda ovqatlanasiz?</p>
      </div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose('Eat In')}
                data-aos="fade-right"
                sx={{
                  textAlign: "center",
                  maxWidth: "400px",
                  borderRadius: 8,
                  padding: 3,
                }}
              >
                <CardContent>
                  <img src={Image1} alt="ChScreen1" />
                  <Typography
                    variant="body2"
                    className="textStyle"
                    color="text.dark"
                  >
                    Ichkarida ovqatlanish
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                onClick={() => handlerChoose('Take Out')}
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
                  <img src={Image2} alt="ChScreen1" />
                  <Typography
                    variant="body2"
                    className="textStyle pt-4"
                    color="text.dark"
                  >
                    o’zi bilan <br /> olib ketish
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
