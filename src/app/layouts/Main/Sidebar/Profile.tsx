import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from '@reach/router';
import clsx from 'clsx';
import React from 'react';
import { ITheme } from '../../../theme';
import { Auth } from '../../../App';
import { getInitials } from '../../../../utils';

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

const Profile: React.FC<IProps> = ({ className, ...rest }) => {
  const { user, authUser } = Auth.useContainer();
  const classes = useStyles();

  if (!user || !authUser) {
    return null;
  }

  const initials = getInitials(authUser.displayName || 'NOPE');

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={authUser.displayName || undefined}
        className={classes.avatar}
        component={RouterLink}
        src={user.avatarUrl || undefined}
        to="/settings">
        {initials}
      </Avatar>
      <Typography className={classes.name} variant="h4">
        {authUser.displayName}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
    </div>
  );
};

export default Profile;
