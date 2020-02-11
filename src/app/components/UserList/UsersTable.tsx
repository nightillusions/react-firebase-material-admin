import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import moment from 'moment';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { getInitials } from '../../../utils';
import { IUser } from '../../models/User.model';
import { ITheme } from '../../theme';

interface IProps {
  className?: string;
  users: IUser[];
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  tableRow: {}
}));

const UsersTable: React.FC<IProps> = ({ className, users, ...rest }) => {
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const handleSelectAll = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      setSelectedUsers([...users.map(user => user.id)]);
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectOne = (id: string): (() => void) => (): void => {
    const selectedIndex = selectedUsers.indexOf(id);

    if (selectedIndex === -1) {
      setSelectedUsers(selectedUsers.concat(selectedUsers, id));
    } else if (selectedIndex === 0) {
      setSelectedUsers(selectedUsers.concat(selectedUsers.slice(1)));
    } else if (selectedIndex === selectedUsers.length - 1) {
      setSelectedUsers(selectedUsers.concat(selectedUsers.slice(0, -1)));
    } else if (selectedIndex > 0) {
      setSelectedUsers(
        selectedUsers.concat(
          selectedUsers.slice(0, selectedIndex),
          selectedUsers.slice(selectedIndex + 1)
        )
      );
    }

    setSelectedUsers([]);
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(Number(event.target.value));
  };

  const address = (user: IUser) =>
    user.address &&
    `${user.address.city}, ${user.address.state}, ${user.address.country}`;

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.length === users.length}
                      color="primary"
                      indeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < users.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Registration date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(0, rowsPerPage).map(user => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={user.id}
                    selected={selectedUsers.indexOf(user.id) !== -1}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedUsers.indexOf(user.id) !== -1}
                        color="primary"
                        onChange={handleSelectOne(user.id)}
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Avatar
                          className={classes.avatar}
                          src={user.avatarUrl || undefined}>
                          {getInitials(`${user.firstName} ${user.lastName}`)}
                        </Avatar>
                        <Typography variant="body1">{`${user.firstName} ${user.lastName}`}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{address(user)}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>
                      {moment(user.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={users.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

export default UsersTable;
