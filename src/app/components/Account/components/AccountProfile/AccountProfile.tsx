import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { getInitials } from '../../../../../utils';
import { Auth } from '../../../../App';
import { ITheme } from '../../../../theme';
import getFullName from '../../../../../utils/getFullName';
import EditAvatar from './EditAvatar';
import Users from '../../../../firebase/firestore/User';

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
    height: 105,
    width: 105,
    flexShrink: 0,
    flexGrow: 0,
    borderRadius: "50%",
    boxShadow: "0 0 0 2px transparent",
    "&:hover": {
      cursor: "pointer",
      overflow: "hidden",
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}`
    }
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  locationText: {},
  dateText: {},
  avatarButtons: {
    display: "flex",
    padding: "8px",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse"
  }
}));

const AccountProfile: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();
  const { user, authUser } = Auth.useContainer();

  if (!user || !authUser) {
    return null;
  }

  const handleRemovePicture = async () => {
    await Users.update({
      ...user,
      avatarUrl: null
    });
  };

  const initials = getInitials(authUser.displayName || 'NOPE');

  const complettness = Math.round((Object.values(user).filter(String).length / Object.keys(user).length) * 100);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h2">
              {getFullName(user)}
            </Typography>
            {user.address && (
              <Typography
                className={classes.locationText}
                color="textSecondary"
                variant="body1">
                {`${user.address.city}, ${user.address.country}`}
              </Typography>
            )}
            {user.timezone && (
              <Typography
                className={classes.dateText}
                color="textSecondary"
                variant="body1">
                {moment().format('hh:mm A')} ({user.timezone})
              </Typography>
            )}
          </div>
          <EditAvatar className={classes.avatar}>
            <Avatar
              alt={getFullName(user)}
              className={classes.avatar}
              src={user.avatarUrl || undefined}>
              {initials}
            </Avatar>
          </EditAvatar>
        </div>
        <div className={classes.progress}>
            <Typography variant="body1">Profile Completeness: {complettness}%</Typography>
          <LinearProgress value={complettness} variant="determinate" />
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.avatarButtons}>
        <Button
          onClick={handleRemovePicture}
          disabled={!user.avatarUrl}
          variant="text">
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
