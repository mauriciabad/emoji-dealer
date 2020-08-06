import React from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './HomeViewStyles';

export default function HomeView() {
  const classes = useStyles();

  return (
    <HeaderFooter className={classes.root}>
      <p>Home view</p>
    </HeaderFooter>
  );
}
