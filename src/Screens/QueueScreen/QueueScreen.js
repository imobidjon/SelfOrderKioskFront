import React, { useContext, useEffect } from "react";
import { listQueue } from "../../actions";
import { Store } from "../../Store";
import { Alert, CircularProgress, Grid, List, ListItem, Paper } from "@mui/material";

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
          <Grid item md={6}>
            <Paper>
              <h1 >In Progress</h1>
              <List>
                {queue.inProgressOrders.map((order) => (
                  <ListItem key={order.number}>
                    <h1>{order.number}</h1>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <h1>Now Serving </h1>
              <List>
                {queue.servingOrders.map((order) => (
                  <ListItem key={order.number}>
                    <h1>{order.number}</h1>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
