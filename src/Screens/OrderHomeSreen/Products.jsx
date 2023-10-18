import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Burger from "../../assets/images/Burger.png";
import { AddCircle } from '@mui/icons-material';


export default function Products() {
  return (
    <Box sx={{mt: 10}}>
        <Box>
            <Typography className='ProductsTitle'>Mashxurlari</Typography>
        </Box>
        <Grid container columns={10}>
            <Grid item xs={2}>
                <Box sx={{
                    background: 'linear-gradient(118deg, rgba(126, 62, 190, 0.22) 32.67%, rgba(126, 62, 190, 0.19) 85.65%);',
                    borderRadius: '20px',
                    mt: 4
                }}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <div >
                            <img src={Burger} width={'300px'} alt="productBurger" />
                        </div>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: '10px 15px 15px 15px'
                    }}>
                        <Box>
                            <Typography className='ProductName'>Zinger Burger</Typography>
                            <Typography className='ProductPrice'><span className='text-dark'>Narxi:</span> 25.000 so'm</Typography>
                        </Box>
                        <Box>
                            <AddCircle sx={{color: '#7E3EBE', fontSize: '50px'}} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
