import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ITheme } from '../../../../../../theme';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile:React.FC<IProps> = ({ className, ...rest }) => {

  const classes = useStyles();

  const user = {
    name: 'Shen Zhi',
    avatar: '/images/avatars/avatar_11.png',
    bio: 'Brain Director'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

export default Profile;
