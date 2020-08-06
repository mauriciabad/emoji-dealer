import React from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './HomeViewStyles';
import { Link } from "react-router-dom";

export default function HomeView() {
  const classes = useStyles();

  return (
    <HeaderFooter className={classes.root}>
      <p>Home view</p>
      <Link to="/game">Game</Link>
    </HeaderFooter>
  );
}
