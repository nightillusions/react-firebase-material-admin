import { Button, Card, CardActions, CardContent, CardHeader, Divider, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Auth } from '../../../../App';

interface IProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const Password:React.FC<IProps> = ({ className, ...rest }) => {
  const {user, authUser} = Auth.useContainer();
  const classes = useStyles();
  
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });
  
  if (!user || !authUser) {
    return null;
  }
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSavePassword = () => {
    authUser.updatePassword(values.password)
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            name="confirm"
            onChange={handleChange}
            style={{ marginTop: '1rem' }}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleSavePassword}
            disabled={values.password !== values.confirm || !values.password}
          >
            Update
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Password;
