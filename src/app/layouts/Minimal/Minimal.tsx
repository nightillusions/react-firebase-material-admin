import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

import { Topbar } from "./components";

interface IProps {
  children: ReactNode;
  className?: string;
}

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: "100%"
  },
  content: {
    height: "100%"
  }
}));

const Minimal: React.FC<IProps> = ({ children, className }: IProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(className, classes.root)}>
      <Topbar />
      <main className={clsx(className, classes.content)}>{children}</main>
    </div>
  );
};

export default Minimal;
