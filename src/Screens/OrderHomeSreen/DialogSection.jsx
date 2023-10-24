import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Store } from "../../Store";
import {
  AddCircle,
  AddCircleOutline,
  RemoveCircle,
  RemoveCircleOutline,
  ShoppingBasket,
} from "@mui/icons-material";
import { addToOrder, removeFromOrder } from "../../actions";
import Swal from "sweetalert2";

// Images
import Suzma from "../../assets/images/Suzma.png";
import Chili from "../../assets/images/Chili.png";
import Pishloq from "../../assets/images/Pishloq.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSection({ setOpen, open }) {
  const { state, dispatch } = useContext(Store);
  const { selected } = state.SelectedProduct;
  const [quantity, setQuantity] = useState(1);
  const [qoshimchalar, setQoshimchalar] = useState({});
  const AddToOrderHandler = () => {
    addToOrder(dispatch, { ...selected, quantity, qoshimchalar });
    setOpen(false);
    setQuantity(1);
    Swal.fire({
      icon: "success",
      title: `Yaxshi tanlov`,
      text: `Taomingiz savatchaga qo'shildi`,
      timer: 2000,
      timerProgressBar: true,
      confirmButtonText: "Yaxshi!",
    });
  };

  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, selected);
    setOpen(false);
  };
  return (
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
                src={selected.image}
                alt={selected.name}
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
                  {selected.name}
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
                    <b>{selected.price}</b> so'm
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

                  <IconButton onClick={() => setQuantity(quantity + 1)}>
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
              <Box sx={{ my: 4 }}>
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
                        setQoshimchalar(qoshimchalar.suzma ? { ...qoshimchalar, suzma: false } :  { ...qoshimchalar, suzma: true })
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
              </Box>

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
                  onClick={AddToOrderHandler}
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
                  Savatga qo'shish
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
