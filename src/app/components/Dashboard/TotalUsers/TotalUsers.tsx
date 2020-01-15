import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { ITheme } from "../../../theme";

interface IProps {
  className: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    height: "100%"
  },
  content: {
    alignItems: "center",
    display: "flex"
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.success.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center"
  },
  differenceIcon: {
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  },
  caption: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeight,
    letterSpacing: theme.typography.letterSpacing,
    lineHeight: "13px",
    textTransform: "uppercase"
  }
}));

const TotalUsers: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              TOTAL USERS
            </Typography>
            <Typography variant="h3">1,600</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography className={classes.differenceValue} variant="body2">
            16%
          </Typography>
          <Typography className={classes.caption} variant="caption">
            Since last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalUsers;
