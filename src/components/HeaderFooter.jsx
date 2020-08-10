import React from 'react';
import AppBarTop from './AppBarTop';
import { Container } from '@material-ui/core';
import Div100vh from 'react-div-100vh';
import useStyles from './HeaderFooterStyles';

export default function HeaderFooter({ children }) {
  const classes = useStyles();

  return (
    <Div100vh className={classes.root}>
      <AppBarTop />
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </Div100vh>
  );
}
