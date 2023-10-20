import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Store } from "../../Store";
import {
  AddCircle,
  AddCircleOutline,
  RemoveCircleOutline,
} from "@mui/icons-material";

// Images
import Suzma from "../../assets/images/Suzma.png";
import Chili from "../../assets/images/Chili.png";
import Pishloq from "../../assets/images/Pishloq.png";

export default function DialogSection({ setOpen, open }) {
  const { state } = useContext(Store);
  const { SelectedProduct } = state.order;

  console.log(SelectedProduct.name);

  return (
    <div>
      <Dialog
        maxWidth={"sm"}
        fullWidth={true}
        onClose={() => setOpen(false)}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            background: "#7E3EBE",
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
              xs={6}
              sx={{
                background: "#7E3EBE",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: '100%'
                }}
              >
                <img
                  width={"100%"}
                  src={SelectedProduct.image}
                  alt={SelectedProduct.name}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                background: "#E2DBEA",
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
                      color: "#7E3EBE",
                    }}
                  >
                    {SelectedProduct.name}
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
                    <Typography sx={{ fontFamily: "Poppins",}}>
                      <b>{SelectedProduct.price}</b> so'm
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <IconButton>
                      <AddCircleOutline sx={{ color: "#7E3EBE", fontSize: '35px' }} />
                    </IconButton>
                    <Typography> 1</Typography>
                    <IconButton>
                      <RemoveCircleOutline sx={{ color: "#7E3EBE", fontSize: '35px' }} />
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
                      }}
                    >
                      <img src={Pishloq} width={"80px"} alt="Pishloq" />
                      <IconButton>
                        <AddCircle
                          sx={{
                            color: "#7E3EBE",
                            fontSize: "30px",
                            position: "absolute",
                            bottom: "-10px",
                            right: "-35px",
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "20px",
                        p: "50px 10px 0px 10px",
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img src={Chili} width={"100px"} alt="Chili" />
                      <IconButton>
                        <AddCircle
                          sx={{
                            color: "#7E3EBE",
                            fontSize: "30px",
                            position: "absolute",
                            bottom: "35px",
                            right: "-35px",
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        background: "#fff",
                        borderRadius: "20px",
                        p: "20px 10px 0 10px",
                        width: "75px",
                        height: "75px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img src={Suzma} width={"65px"} alt="Suzma" />
                      <IconButton>
                        <AddCircle
                          sx={{
                            color: "#7E3EBE",
                            fontSize: "30px",
                            position: "absolute",
                            bottom: "1px",
                            right: "-35px",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>

                {/* Button */}

                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    fullWidth={true}
                    sx={{
                      background: "#7E3EBE",
                      borderRadius: "13px",
                      "&:hover": {
                        backgroundColor: "#9852dd",
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
    </div>
  );
}
