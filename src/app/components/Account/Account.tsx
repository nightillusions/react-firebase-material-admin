import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { ITheme } from "../../theme";
import AccountDetails from "./AccountDetails";
import AccountProfile from "./AccountProfile";


const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Account: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <AccountProfile />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <AccountDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
