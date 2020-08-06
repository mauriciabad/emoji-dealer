import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppBarTop() {

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Emoji dealer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
