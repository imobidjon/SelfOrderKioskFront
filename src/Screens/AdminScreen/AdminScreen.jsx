import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Store } from "../../Store";
import axios from "axios";
import { listOrders } from "../../actions";
import { Cancel, CheckCircle, LocalShipping } from "@mui/icons-material";

export default function AdminScreen() {
  const { state, dispatch } = useContext(Store);
  const { orders, loading, error } = state.orderList;

  const setOrderStateHandler = async (order, action) => {
    try {
      await axios.put("http://192.168.43.241:5000/api/orders/" + order._id, {
        action: action,
      });
      listOrders(dispatch);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    listOrders(dispatch);
  }, [dispatch]);

  return (
    <div>
      <div className="title pt-3">
        <div className="centerStyle">
          <img width={"30%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <p className="mb-2 mx-3">Bizning buyurtmalar:</p>
      </div>

      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead>
              <TableRow>
                <TableCell>B. raqami</TableCell>
                <TableCell align="right">Narxi</TableCell>
                <TableCell align="right">Soni</TableCell>
                <TableCell align="right">Nomi</TableCell>
                <TableCell align="right">Turi</TableCell>
                <TableCell align="right">To'lov</TableCell>
                <TableCell align="right">Xolati</TableCell>
                <TableCell align="right">Harakatlar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.name}>
                  <TableCell component="th">
                    {order.number}
                  </TableCell>
                  <TableCell align="right">{order.totalPrice}</TableCell>
                  <TableCell align="right">{order.orderItems.length}</TableCell>
                  <TableCell align="right">
                    {order.orderItems.map((item) => (
                      <Box key={item.name}>
                        {item.name} x {item.quantity}
                      </Box>
                    ))}
                  </TableCell>
                  <TableCell align="right">{order.orderType}</TableCell>
                  <TableCell align="right">{order.paymentType}</TableCell>
                  <TableCell align="right">
                    {order.inProgress
                      ? "Tayyorlanmoqda"
                      : order.isReady
                      ? "Tayyor"
                      : order.isDelivered
                      ? "Yuborildi"
                      : "Noma'lum"}
                  </TableCell>
                  <TableCell align="right" sx={{display: 'flex', alignItems: 'center'}}>

                    <IconButton
                      onClick={() => setOrderStateHandler(order, "cancel")}
                      size="small"
                      sx={{
                        backgroundColor: "red",
                        color: "#fff",
                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
                        "&:hover": {
                          backgroundColor: "#b74c3a",
                        },
                      }}
                    >
                      <Cancel />
                    </IconButton>
                    <IconButton
                      onClick={() => setOrderStateHandler(order, "deliver")}
                      size="small"
                      sx={{
                        backgroundColor: "red",
                        color: "#fff",
                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
                        "&:hover": {
                          backgroundColor: "#b74c3a",
                        },
                      }}
                    >
                      <LocalShipping />
                    </IconButton>
                    <IconButton
                      onClick={() => setOrderStateHandler(order, "ready")}
                      size="small"
                      sx={{
                        backgroundColor: "green",
                        color: "#fff",
                        boxShadow: "0 1px 4px 0 rgba(0,0,0,0.12)",
                        "&:hover": {
                          backgroundColor: "#b74c3a",
                        },
                      }}
                    >
                      <CheckCircle />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
