import {
  Grid,
  CircularProgress,
  makeStyles,
  useTheme
} from '@material-ui/core';

import React from 'react';
import { ITheme } from '../../theme';

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    paddingTop: '25%'
  }
}));

const LoadingSpinner: React.FC<{}> = () => {
  const theme = useTheme<ITheme>();
  const classes = useStyles(theme);
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item>
        <CircularProgress size={80} />
      </Grid>
    </Grid>
  );
};

export default LoadingSpinner;
