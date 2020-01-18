import { Link,  Typography } from '@material-ui/core';
import { Link as RouterLink } from '@reach/router'
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { ITheme } from '../../../../theme';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme:ITheme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer: React.FC<IProps> = ({ className, ...rest }) => {

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
        &copy;{' '}
        <Link
          component={RouterLink}
          to="https://devias.io/"
          target="_blank"
        >
          Devias IO
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created with love for the environment. By designers and developers who
        love to work together in offices!
      </Typography>
    </div>
  );
};

export default Footer;
