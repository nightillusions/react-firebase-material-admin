import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import moment from 'moment';
import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ITheme } from '../../../theme';
import StatusBullet from '../../StatusBullet';
import {
  StatusBulletColor,
  StatusBulletSize
} from '../../StatusBullet/StatusBullet';
import mockData from './data';

interface IProps {
  className?: string;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: StatusBulletColor.SUCCESS,
  pending: StatusBulletColor.INFO,
  refunded: StatusBulletColor.DANGER
} as {
  [key: string]: StatusBulletColor;
};

const LatestOrders: React.FC<IProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        action={
          <Button color="primary" size="small" variant="outlined">
            New entry
          </Button>
        }
        title="Latest Orders"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order Ref</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell sortDirection="desc">
                    <Tooltip enterDelay={300} title="Sort">
                      <TableSortLabel active direction="desc">
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow hover key={order.id}>
                    <TableCell>{order.ref}</TableCell>
                    <TableCell>{order.customer.name}</TableCell>
                    <TableCell>
                      {moment(order.createdAt).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={statusColors[order.status]}
                          size={StatusBulletSize.SMALL}
                        />
                        {order.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default LatestOrders;
