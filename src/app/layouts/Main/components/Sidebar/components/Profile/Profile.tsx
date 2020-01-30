import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { Link as RouterLink, Redirect } from '@reach/router';
import { ITheme } from '../../../../../../theme';
import { Auth } from '../../../../../../App';
import { getInitials } from '../../../../../../../utils';

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
  const { user } = Auth.useContainer();
  const classes = useStyles();

  if (!user) {
    return <Redirect from="" to="/sign-out" noThrow />;
  }

  const initials = getInitials(user.displayName || 'NOPE');

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt={user.displayName || undefined}
        className={classes.avatar}
        component={RouterLink}
        src={user.photoURL || undefined}
        to="/settings">
        {initials}
      </Avatar>
      <Typography className={classes.name} variant="h4">
        {user.displayName}
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
    </div>
  );
};

export default Profile;
