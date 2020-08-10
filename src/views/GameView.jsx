import React, { useContext } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameViewStyles';
import { GameContext } from '../contexts/GameContext';
import { GameDispatchContext } from '../contexts/GameContext';
import { Paper, Typography, IconButton } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function GameView() {
  const classes = useStyles();
  const game = useContext(GameContext);
  const dispatchGame = useContext(GameDispatchContext);

  // if(isNaN(game.player)) setOpenPlayerDialog(true);

  function handleNextRoundClick() {
    dispatchGame({type: 'nextRound'})
  }
  function handlePrevRoundClick() {
    dispatchGame({type: 'prevRound'})
  }

  return (
    <HeaderFooter className={classes.root}>
      <div className={classes.roundButtons}>
        <IconButton onClick={handlePrevRoundClick}><NavigateBeforeIcon /></IconButton>
        <Typography variant="h3" className={classes.roundButtonsTitle}>Round {game.round}</Typography>
        <IconButton onClick={handleNextRoundClick}><NavigateNextIcon /></IconButton>
      </div>

      <div className={classes.cards}>
        {game.orderedCards.map((value, index) => {
          return <Paper key={index} className={classes.card}>{value}</Paper>
        })}
      </div>

      <Paper className={classes.mainCard}>{game.card}</Paper>
    </HeaderFooter>
  );
}
