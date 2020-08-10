import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from './CardFlipStyles';

export default function CardFlip({ onFlip=(()=>{}), revealed=false, children, ...props }) {
  const classes = useStyles();

  function handleClick(){
    onFlip(!revealed);
  }

  return (
    <div className={classes.container}>
      <div 
        onClick={handleClick}
        className={[classes.card, revealed ? '' : classes.cardRevealed].join(' ')}
      >
        <Paper className={classes.front}>{children}</Paper>
        <Paper className={classes.back}></Paper>
      </div>
    </div>
  );
}