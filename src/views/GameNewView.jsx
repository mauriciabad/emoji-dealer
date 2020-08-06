import React from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameNewViewStyles';

export default function GameNewView() {
  const classes = useStyles();

  return (
    <HeaderFooter className={classes.root}>
      <p>Game new view</p>
    </HeaderFooter>
  );
}
