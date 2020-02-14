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
  Typography,
  Drawer,
  Grid,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { getInitials } from '../../../utils';
import { IUser } from '../../models/User.model';
import { ITheme } from '../../theme';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DoneIcon from '@material-ui/icons/Done';

interface IProps {
  className?: string;
  users: IUser[];
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {
    padding: theme.spacing(3)
  },
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
  selectedMenuActions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  tableRow: {}
}));

const UsersTable: React.FC<IProps> = ({ className, users, ...rest }) => {
  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [openSelectMenu, setOpenSelectMenu] = useState<boolean>(
    Boolean(selectedUsers.length)
  );
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    useEffect(() => {
      setOpenSelectMenu(Boolean(selectedUsers.length));
    }, [selectedUsers]);

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
    if (!selectedUsers.includes(id)) {
      setSelectedUsers([...selectedUsers, id]);
    } else {
      setSelectedUsers([
        ...selectedUsers.filter(user => user !== id)
      ]);
    }
  };

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const address = (user: IUser) =>
    user.address &&
    `${user.address.city}, ${user.address.state}, ${user.address.country}`;


    const selectMenu = () => {
      return (
        <div className={classes.root}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={2}>
            <Grid item md={3}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                component="h6"
              />
              {`${selectedUsers.length} selected`}
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container className={classes.selectedMenuActions} spacing={2}>
                <Button startIcon={<DoneIcon />}>Enable Watch</Button>
                <Button startIcon={<ClearIcon />}>Disable Watch</Button>
                <Button startIcon={<DeleteOutlineIcon />}>
                  Delete
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    };

  return (
    <>
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
                {(rowsPerPage > 0
                  ? users.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : users
                ).map(user => (
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
                {page > 0 && emptyRows > 0 && (
                  <TableRow style={{ height: 73 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
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
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        />
      </CardActions>
    </Card>
    <Drawer
        elevation={1}
        anchor="bottom"
        open={openSelectMenu}
        variant="persistent"
        onClose={() => setOpenSelectMenu(false)}>
        {selectMenu()}
      </Drawer>
    </>
  );
};

export default UsersTable;
