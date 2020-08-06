import React from 'react';
import AppBarTop from './AppBarTop';
import { Container } from '@material-ui/core';

export default function HeaderFooter({ children }) {

  return (
    <>
      <AppBarTop />
      <Container maxWidth="sm">
        {children}
      </Container>
    </>
  );
}
