import React, { useContext, useState } from "react";
import "./OHScreen.css";
import Categories from "./Categories";
import Products from "./Products";
import DialogSection from "./DialogSection";
import { Store } from "../../Store";
import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { ArrowBack, Close, ShoppingBasket } from "@mui/icons-material";
import { clearOrder, removeFromOrder } from "../../actions";
import { useNavigate } from "react-router-dom";

// Images
// import Suzma from "../../assets/images/Suzma.png";
// import Chili from "../../assets/images/Chili.png";
// import Pishloq from "../../assets/images/Pishloq.png";

export default function OHScreen() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const [categoryName, setcategoryName] = useState("");
  const { orderItems, itemsCount, totalPrice } = state.order;
  const navigate = useNavigate();

  const cancelOrRemoveFromOrder = (SelectedProduct) => {
    removeFromOrder(dispatch, SelectedProduct);
  };

  return (
    <Box sx={{ ml: "140px" }} className="bgColor">
      <Categories
      itemsCount={itemsCount}
        categoryName={categoryName}
        setcategoryName={setcategoryName}
      />
      <Products
      itemsCount={itemsCount} categoryName={categoryName} setOpen={setOpen} />
      <DialogSection open={open} setOpen={setOpen} />

      {itemsCount ? (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: "10001",
            background: "#efefef",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              overflowX: "scroll",
              overflowY: "hidden",
            }}
          >
            <Box
              sx={{
                borderRight: "3px solid #b74c3a",
                mr: 2,
                p: 1,
                pr: 3,
                position: "sticky",
                left: 0,
                background: "#efefef",
                zIndex: 1,
              }}
            >
              <p className="text-center">
                Mening <br />
                buyurtmalaringiz:{" "}
              </p>
              <Typography variant="caption" color="textSecondary">
                Soni:
                <b>{itemsCount}</b>
              </Typography>
              <br />
              <Typography variant="caption" color="textSecondary">
                Umumiy narxi:
                <b> {totalPrice}</b>
              </Typography>
            </Box>
            {orderItems.map((item) => (
              // <div
              //   className="card"
              //   style={{
              //     border: "1px solid #772C1E",
              //     borderRadius: "20px",
              //     marginRight: "5px",
              //     minWidth: "300px",
              //     maxHeight: "100px",
              //   }}
              // >
              //   <div
              //     style={{
              //       display: "flex",
              //       alignItems: "center",
              //     }}
              //   >
              //     <div className="d-flex justify-content-center align-items-center card-body">
              //       <img
              //         src={item.image}
              //         style={{
              //           maxWidth: "200px",
              //           width: "100px",
              //         }}
              //         alt="sswq"
              //       />
              //     </div>
              //     <div
              //       className="pt-2 pr-5 h-100"
              //       style={{ padding: "10px 20px 0 0" }}
              //     >
              //       <h4>{item.name}</h4>
              //       <p>
              //         <b>Soni: </b>
              //         {item.quantity}
              //       </p>
              //     </div>
              //   </div>
              // </div>
              <Card
                key={item._id}
                sx={{
                  display: "block",
                  margin: 2,
                  minWidth: "290px",
                  borderRadius: "20px",
                  position: "relative",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    pt: 2,
                    "&:last-child": {
                      paddingBottom: 2,
                    },
                  }}
                >
                  {/* {
                    item.qoshimchalar.pishloq || item.qoshimchalar.chili || item.qoshimchalar.suzma ? 
                    <Box sx={{ position: "absolute", top: -10, background: '#772C1E', width: '100px', height: '30px', borderRadius: '20px' }}>
                      {
                        console.log(' slssl',Object.keys(item.qoshimchalar).find((i) => item.qoshimchalar[i] === true))
                      }
                    </Box>
                    : " "
                  } */}
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: 48,
                      height: 48,
                    }}
                    src={item.image}
                  />
                  <Box px={3}>
                    <Typography variant="h6" sx={{ lineHeight: 1 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      <b>Soni: </b>
                      {item.quantity}
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={() => cancelOrRemoveFromOrder(item)}
                      size="small"
                      sx={{
                        mb: 1,
                        backgroundColor: "#b74c3a",
                        color: "#fff",
                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
                        "&:hover": {
                          backgroundColor: "#b74c3a",
                        },
                      }}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box
            sx={{
              zIndex: "10001",
              display: "flex",
              alignItems: "center",
              p: 1,
            }}
          >
            <Button
              onClick={() => {
                clearOrder(dispatch);
                navigate("/");
              }}
              startIcon={<ArrowBack />}
              variant="contained"
              sx={{
                background: "none",
                border: "2px #772C1E solid",
                borderRadius: "13px",
                color: "#000",
                width: "100%",
                mr: 1,
                "&:hover": {
                  backgroundColor: "#b74c3a",
                  borderColor: "#b74c3a",
                  boxShadow: "none",
                  color: "#fff",
                },
              }}
            >
              Bekor Qilish
            </Button>
            <Button
              onClick={() => navigate(`/review`)}
              endIcon={<ShoppingBasket />}
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
              KO'RISH VA TASDIQLASH
            </Button>
          </Box>
        </Box>
      ) : (
        " "
      )}
    </Box>
  );
}
