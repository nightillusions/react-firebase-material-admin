import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface IProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none"
  }
}));

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
          <img alt="Logo" src="/images/logos/logo--white.svg" />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
