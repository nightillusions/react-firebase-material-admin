import { Button, colors, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react';
import { ITheme } from '../../../../../../theme';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    backgroundColor: colors.grey[50]
  },
  media: {
    paddingTop: theme.spacing(2),
    height: 80,
    textAlign: 'center',
    '& > img': {
      height: '100%',
      width: 'auto'
    }
  },
  content: {
    padding: theme.spacing(1, 2)
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const UpgradePlan: React.FC<IProps> = ({ className, ...rest}) => {

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.media}>
        <img
          alt="Upgrade to PRO"
          src="/images/undraw_resume_folder_2_arse.svg"
        />
      </div>
      <div className={classes.content}>
        <Typography
          align="center"
          gutterBottom
          variant="h6"
        >
          Upgrade to PRO
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to Devias Kit PRO and get even more components
        </Typography>
      </div>
      <div className={classes.actions}>
        <Button
          color="primary"
          component="a"
          href="https://devias.io/products/devias-kit-pro"
          variant="contained"
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default UpgradePlan;
