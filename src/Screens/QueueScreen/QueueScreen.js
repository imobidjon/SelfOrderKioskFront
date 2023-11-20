import React, { useContext, useEffect } from "react";
import { listQueue } from "../../actions";
import { Store } from "../../Store";
import { Alert, CircularProgress, Divider, Grid, List, ListItem, Paper } from "@mui/material";

export default function QueueScreen() {
  const { state, dispatch } = useContext(Store);
  const { queue, loading, error } = state.queueList;

  useEffect(() => {
    listQueue(dispatch);
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Grid container spacing={2}>
          <Grid item md={6} xs={6}>
            <Paper sx={{textAlign: 'center'}}>
              <h1 style={{background: 'red', color: 'white', padding: '10px' }}>Tayyorlanmoqda</h1>
              <List>
                {queue.inProgressOrders.map((order) => (
                  <>
                    <ListItem sx={{display: 'flex', justifyContent: 'center'}} key={order.number}>
                      <h1>{order.number}</h1>
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item md={6} xs={6}>
            <Paper sx={{textAlign: 'center'}}>
              <h1 style={{background: 'green', color: 'white', padding: '10px' }}>Tayyor </h1>
              <List>
                {queue.servingOrders.map((order) => (
                  <>
                    <ListItem sx={{display: 'flex', justifyContent: 'center'}} key={order.number}>
                      <h1>{order.number}</h1>
                    </ListItem>
                    <Divider />
                  </>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
