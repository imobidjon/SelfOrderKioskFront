import {
  AddCircle,
  AddCircleOutline,
  ArrowBack,
  AssignmentTurnedIn,
  EditNote,
  RemoveCircle,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Store } from "../../Store";
import { addToOrder, removeFromOrder } from "../../actions";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RScreen() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { orderItems, itemsCount, totalPrice, orderType, payMethod } = state.order;
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState();

  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setOpen(false);
  };

  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        onClose={() => setOpen(false)}
        TransitionComponent={Transition}
        open={open}
        sx={{
          zIndex: 100000,
          "& .MuiDialog-paper": {
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            background: "#772C1E",
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
            }}
          >
            <Grid
              item
              xs={5}
              sx={{
                background: "#772C1E",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  style={{ maxWidth: "100%", width: "200px" }}
                  src={product.image}
                  alt={product.name}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                background: "#efefef",
                borderRadius: "20px 0 0 20px",
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      color: "#772C1E",
                    }}
                  >
                    {product.name}
                  </Typography>
                </Box>

                {/* price  Add, remove buttons */}
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography sx={{ fontFamily: "Poppins" }}>
                      <b>{product.price}</b> so'm
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      disabled={quantity === 1}
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      <RemoveCircleOutline
                        sx={{ color: "#772C1E", fontSize: "35px" }}
                      />
                    </IconButton>
                    <Typography>{quantity}</Typography>

                    <IconButton onClick={() => setQuantity(quantity +1)}>
                      <AddCircleOutline
                        sx={{ color: "#772C1E", fontSize: "35px" }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                {/* Ingredients */}
                <Typography sx={{ fontSize: "12px", mt: 1 }}>
                  A well-seasoned, crispy Zinger filled with Tomatoes,
                  onions,Cheddar cheese,lettuce&Special sauce!
                </Typography>

                {/* Qo'shimchalar */}
                {/* <Box sx={{ my: 4 }}>
                  <Typography sx={{ mb: 1 }}>Qo'shimchalar: </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "20px",
                        p: 2,
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <img src={Pishloq} width={"80px"} alt="Pishloq" />
                      <IconButton
                        onClick={() =>
                          setQoshimchalar(
                            qoshimchalar.pishloq
                              ? { ...qoshimchalar, pishloq: false }
                              : { ...qoshimchalar, pishloq: true }
                          )
                        }
                        sx={{
                          position: "absolute",
                          bottom: "-15px",
                          right: "-15px",
                        }}
                      >
                        {qoshimchalar.pishloq ? (
                          <RemoveCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        ) : (
                          <AddCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        )}
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "20px",
                        p: "30px 10px 0px 10px",
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <img src={Chili} width={"100px"} alt="Chili" />
                      <IconButton
                        onClick={() =>
                          setQoshimchalar(
                            qoshimchalar.chili
                              ? { ...qoshimchalar, chili: false }
                              : { ...qoshimchalar, chili: true }
                          )
                        }
                        sx={{
                          position: "absolute",
                          bottom: "-15px",
                          right: "-15px",
                        }}
                      >
                        {qoshimchalar.chili ? (
                          <RemoveCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        ) : (
                          <AddCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        )}
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "20px",
                        p: "0 10px 0 10px",
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <img src={Suzma} width={"100%"} alt="Suzma" />
                      <IconButton
                        onClick={() =>
                          setQoshimchalar(
                            qoshimchalar.suzma
                              ? { ...qoshimchalar, suzma: false }
                              : { ...qoshimchalar, suzma: true }
                          )
                        }
                        sx={{
                          position: "absolute",
                          bottom: "-15px",
                          right: "-15px",
                        }}
                      >
                        {qoshimchalar.suzma ? (
                          <RemoveCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        ) : (
                          <AddCircle
                            sx={{
                              color: "#772C1E",
                              fontSize: "30px",
                            }}
                          />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                </Box> */}

                {/* Buttons */}

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    onClick={cancelOrRemoveFromOrder}
                    variant="contained"
                    sx={{
                      background: "none",
                      border: "2px #772C1E solid",
                      borderRadius: "13px",
                      color: "#000",
                      mr: 1,
                      "&:hover": {
                        backgroundColor: "#b74c3a",
                        borderColor: "#b74c3a",
                        boxShadow: "none",
                        color: "#fff",
                      },
                    }}
                  >
                    Ortga
                  </Button>
                  <Button
                    onClick={addToOrderHandler}
                    endIcon={<EditNote />}
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
                    Tahrirlash
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <div className="title pt-3">
        <div className="centerStyle">
          <img width={"20%"} src={"/images/logo.png"} alt={"sss"} />
        </div>
        <p className="mb-5">Savatchadagi taomlarim: 👇</p>
      </div>

      <Box sx={{ mx: 10 }}>
        {orderItems.map((item) => (
          <Card
            key={item.name}
            sx={{
              display: "block",
              margin: 2,
              minWidth: "290px",
              borderRadius: "20px",
              background: "#efefef",
              border: "2px solid #772C1E",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
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
                <Button
                  onClick={() => {
                      setProduct(item);
                      setQuantity(item.quantity)
                    setOpen(true);
                  }}
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
                  startIcon={<EditNote />}
                >
                  Tahrirlash
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "2px solid #772C1E",
            alignItems: "center",
            fontSize: "20px",
            gap: "5px",
            width: "100%",
            justifyContent: "space-evenly",
            m: 2,
          }}
        >
          <b className="text-center">Buyurtma:</b>
          <Divider
            flexItem
            sx={{ borderWidth: "2px", borderColor: "#772C1E" }}
            orientation="vertical"
          />
          <Typography color="textSecondary"> {orderType}</Typography>
          <Divider
            flexItem
            sx={{ borderWidth: "2px", borderColor: "#772C1E" }}
            orientation="vertical"
          />
          <Typography color="textSecondary">{payMethod}</Typography>
          <Divider
            flexItem
            sx={{ borderWidth: "2px", borderColor: "#772C1E" }}
            orientation="vertical"
          />
          <Typography color="textSecondary">Soni: {itemsCount}</Typography>
          <Divider
            flexItem
            sx={{ borderWidth: "2px", borderColor: "#772C1E" }}
            orientation="vertical"
          />
          <Typography color="textSecondary">
            Umumiy narxi: {totalPrice}
          </Typography>
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
            Ortga
          </Button>
          <Button
            endIcon={<AssignmentTurnedIn />}
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
            Rasmiylashtirish
          </Button>
        </Box>
      </Box>
    </div>
  );
}
