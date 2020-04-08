import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface Props {
  children?: React.ReactNode | React.ReactNodeArray;
}

const Layout: React.FC<Props> = (props) => (
  <Paper elevation={0}>
    <AppBar color="primary" position="static">
      <Toolbar style={{ height: 64 }}>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
);

export default Layout;
