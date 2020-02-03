import { AppBar, Button, Theme, Toolbar, withStyles } from "@material-ui/core";
import TimelineIcon from '@material-ui/icons/Timeline';
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink } from '@reach/router';
import clsx from "clsx";
import React from "react";
import { ITheme } from '../../theme';


interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    boxShadow: "none"
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const Logo = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: "#3F51B5",
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
    },
  },
}))(Button);

const Topbar: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/">
          <Logo
          color="primary"
          startIcon={<TimelineIcon />}
        >
          PushTrade
        </Logo>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
