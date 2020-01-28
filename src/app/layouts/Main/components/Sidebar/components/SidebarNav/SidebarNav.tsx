import { Button, colors, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link, Match } from '@reach/router';
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { ITheme } from '../../../../../../theme';

interface IProps {
  className?: string;
  pages: IPage[]
}

export interface IPage{
  title: string;
  href: string;
  icon: JSX.Element;
}

const useStyles = makeStyles((theme: ITheme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const SidebarNav:React.FC<IProps> = ({ pages, className, ...rest }) => {
  
  const classes = useStyles();
  
  // eslint-disable-next-line react/display-name
  const CustomLink = forwardRef((props: any, ref: React.Ref<HTMLDivElement>): JSX.Element => (
      <Match path={`${props.to}/*`}>
        {({match}) => (<div ref={ref} style={{ flexGrow: 1 }}>
            <Link {...props} className={clsx(props.className, Boolean(match) && classes.active)} />
          </div>)
        }
      </Match>));

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            component={CustomLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;
