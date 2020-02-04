import { AppBar, Badge, Hidden, IconButton, Toolbar, Button, withStyles, Theme } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Link as RouterLink } from '@reach/router';
import { ITheme } from '../../../theme';
import { Auth } from '../../../App';
interface IProps {
  onSidebarOpen: () => void;
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
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

const Topbar: React.FC<IProps> = ({ className, onSidebarOpen, ...rest }) => {
  const classes = useStyles();

  const [notifications] = useState([]);

  const { signOut } = Auth.useContainer();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
        <Logo
          color="primary"
          startIcon={<TimelineIcon />}
        >
          React Firebase Material Admin
        </Logo>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={signOut}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
