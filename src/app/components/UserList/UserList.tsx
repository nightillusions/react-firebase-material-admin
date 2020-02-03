import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { ITheme } from '../../theme';
import mockData from './data';
import UsersTable from './UsersTable';
import UsersToolbar from './UsersToolbar';


const useStyles = makeStyles((theme:ITheme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

export default UserList;
