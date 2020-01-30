import { Avatar, Button, Card, CardActions, CardContent, Divider, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { getInitials } from '../../../../../utils';
import { Auth } from '../../../../App';
import { ITheme } from '../../../../theme';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  locationText: {},
  dateText: {}
}));

const AccountProfile: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user } = Auth.useContainer();

  if (!user) {
    return null;
  }

  const handleRemovePicture = () => {
    user.updateProfile({
      photoURL: null
    });
  };

  const initials = getInitials(user.displayName || 'NOPE');

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {user.displayName}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1">
              CITY, COUNTRY
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1">
              {moment().format('hh:mm A')} (TIMEZONE)
            </Typography>
          </div>
          <Avatar
            alt={user.displayName || undefined}
            className={classes.avatar}
            src={user.photoURL || undefined}>
            {initials}
          </Avatar>
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress value={70} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button className={classes.uploadButton} color="primary" variant="text">
          Upload picture
        </Button>
        <Button
          onClick={handleRemovePicture}
          disabled={!user.photoURL}
          variant="text">
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
