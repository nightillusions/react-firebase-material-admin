import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { ITheme } from '../../theme';

interface IProps {
  className?: string;
  color: StatusBulletColor;
  size: StatusBulletSize;
}

export enum StatusBulletColor {
  NEUTRAL = 'neutral',
  PRIMARY = 'primary',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger'
}

export enum StatusBulletSize {
  SMALL = 'sm', 
  MEDIUM = 'md', 
  LARGE = 'lg'
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    display: 'inline-block',
    borderRadius: '50%',
    flexGrow: 0,
    flexShrink: 0
  },
  sm: {
    height: theme.spacing(1),
    width: theme.spacing(1)
  },
  md: {
    height: theme.spacing(2),
    width: theme.spacing(2)
  },
  lg: {
    height: theme.spacing(3),
    width: theme.spacing(3)
  },
  neutral: {
    backgroundColor: theme.palette.neutral
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  info: {
    backgroundColor: theme.palette.info.main
  },
  warning: {
    backgroundColor: theme.palette.warning.main
  },
  danger: {
    backgroundColor: theme.palette.error.main
  },
  success: {
    backgroundColor: theme.palette.success.main
  }
}));

const StatusBullet:React.FC<IProps> = ({ className, size, color, ...rest }) => {

  const classes = useStyles();

  return (
    <span
      {...rest}
      className={clsx(
        {
          [classes.root]: true,
          [classes[size]]: size,
          [classes[color]]: color
        },
        className
      )}
    />
  );
};

export default StatusBullet;
