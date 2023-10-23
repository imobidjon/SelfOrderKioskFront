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
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { removeFromOrder } from "../../actions";

export default function OHScreen() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { orderItems, itemsCount, totalPrice } = state.order;

  const cancelOrRemoveFromOrder = (SelectedProduct) => {
    removeFromOrder(dispatch, SelectedProduct)
  }

  return (
    <Box sx={{ ml: "130px" }} className="bgColor">
      <Categories />
      <Products setOpen={setOpen} />
      <DialogSection open={open} setOpen={setOpen} />

      {
        itemsCount ? (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: "10001",
            display: "flex",
            alignItems: "center",
            overflowX: "scroll",
            overflowY: "hidden",
            background: "#efefef"
          }}
        >
          <Box sx={{ borderRight: "3px solid #b74c3a", mr: 2, p: 1, position: 'sticky',  left: 0, background: "#efefef", zIndex: 1 }}>
            <p className="text-center">
              Sizning <br />
              buyurtmalaringiz:{" "}
            </p>
            <table className="table text-center">
              <thead>
                <tr>
                  <th>Soni:</th>
                  <th>Narxi:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{itemsCount}</td>
                  <td>{totalPrice}</td>
                </tr>
              </tbody>
            </table>
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
            <Card key={item._id} sx={{ display: "block", margin: 2, minWidth: '290px', borderRadius: '20px', }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'space-evenly',
                  pt: 2,
                  "&:last-child": {
                    paddingBottom: 2,
                  },
                }}
              >
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
                      mb:1,
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
        ) : (" ") 
      }
    </Box>
  );
}
