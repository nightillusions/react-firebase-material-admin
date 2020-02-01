import { Divider, Drawer } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ImageIcon from '@material-ui/icons/Image';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { PATHS } from '../../../../paths';
import { ITheme } from '../../../../theme';
import { Profile, SidebarNav } from './components';


interface IProps {
  className?: string;
  onClose: () => void,
  open: boolean,
  variant: 'permanent' | 'persistent' | 'temporary'
}

const useStyles = makeStyles((theme:ITheme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar:React.FC<IProps> = ({ open, variant, onClose, className, ...rest }) => {
  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: PATHS.DASHBOARD,
      icon: <DashboardIcon />
    },
    {
      title: 'Users',
      href: PATHS.USERS,
      icon: <PeopleIcon />
    },
    {
      title: 'Products',
      href: PATHS.PRODUCTS,
      icon: <ShoppingBasketIcon />
    },
    {
      title: 'Typography',
      href: PATHS.TYPOGRAPHY,
      icon: <TextFieldsIcon />
    },
    {
      title: 'Icons',
      href: PATHS.ICONS,
      icon: <ImageIcon />
    },
    {
      title: 'Account',
      href: PATHS.ACCOUNT,
      icon: <AccountBoxIcon />
    },
    {
      title: 'Settings',
      href: PATHS.SETTINGS,
      icon: <SettingsIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

export default Sidebar;
