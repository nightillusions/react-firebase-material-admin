import { Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { Auth } from "../../../../App";
import Users from "../../../../firebase/firestore/User";
import { IUser } from "../../../../models/User.model";

interface IProps {
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails: React.FC<IProps> = ({ className, ...rest }) => {
  const { user, authUser } = Auth.useContainer();
  const classes = useStyles();
  const [pending, setPending] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    country: "",
    zip: "",
    city: "",
    street: ""
  });
    
  useEffect(()=>{
    if(user){
      setValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phone: user.phone || "",
        state: user.address?.state || "",
        country: user.address?.country || "",
        zip: user.address?.zip || "",
        city: user.address?.city || "",
        street: user.address?.street || ""
      });
    }
  },[user])
    

  if (!user || !authUser) {
    return null;
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSave = async () => {
    setPending(true)
    const updatedUser: IUser = {
      ...user,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      address:{
        state: values.state,
        country: values.country,
        zip: values.zip,
        city: values.city,
        street: values.street
      }
    }
    await Users.update(updatedUser);
    setPending(false)
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Zip"
                margin="dense"
                name="zip"
                onChange={handleChange}
                value={values.zip}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                value={values.city}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Street"
                margin="dense"
                name="street"
                onChange={handleChange}
                value={values.street}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="State"
                margin="dense"
                name="state"
                onChange={handleChange}
                value={values.state}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                value={values.country}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained" onClick={handleSave} disabled={pending}>
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AccountDetails;
