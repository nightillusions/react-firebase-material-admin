import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Divider } from "@material-ui/core";
import Budget from "./Budget";
import TotalUsers from "./TotalUsers";
import TasksProgress from "./TasksProgress";
import TotalProfit from "./TotalProfit";
import LatestSales from "./LatestSales";
import UsersByDevice from "./UsersByDevice";
import LatestProducts from "./LatestProducts";
import LatestOrders from "./LatestOrders";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "4px"
  }
}));

const Dashboard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
