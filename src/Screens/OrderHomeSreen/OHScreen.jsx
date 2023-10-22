import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import "./OHScreen.css";
import Categories from "./Categories";
import Products from "./Products";
import DialogSection from "./DialogSection";
import { Star } from "@mui/icons-material";

export default function OHScreen() {
  const [ open, setOpen ] = useState(false)

  return (
    <Box sx={{ml: '150px'}} className='bgColor'>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        direction="row"
        mt={2}
      >
        <Grid item>
          <div className="topTitle">
            <h1>obi roxat kafe</h1>
          </div>
        </Grid>
        {/* <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ 
                width: 400,
                background: '#E2DBEA',
                borderRadius: '30px',
                '.MuiInputBase-root': {
                    py: 0,
                    px: 2,
                    borderRadius: '30px',
                    border: 'none'
                },
             }}
            renderInput={(params) => <TextField {...params} placeholder="Qidiruv" />}
          />
        </Grid> */}
      </Grid>
      <Star onClick={()=> window.requestFullscreen} />

      <Categories />
      <Products setOpen={setOpen} />
      <DialogSection open={open} setOpen={setOpen} />
    </Box>
  );
}

// const top100Films = [
//     { label: 'Non', year: 1994 },
//     { label: 'Shovurma', year: 1972 },
//     { label: 'Lagmon', year: 1974 },
//     { label: 'Burger', year: 2008 },
// ]