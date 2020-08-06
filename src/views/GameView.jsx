import React, { useContext } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameViewStyles';
import { GameContext } from '../contexts/GameContext';
import { Paper, Button } from '@material-ui/core';

function getGameURL({seed, orderedCards}){
  const params = new URLSearchParams();
  params.append('seed', seed);
  params.append('cards', JSON.stringify(orderedCards));
  console.log(`${process.env.REACT_APP_DOMAIN}/game/join?${params.toString()}`)
}

export default function GameView() {
  const classes = useStyles();
  const game = useContext(GameContext);

  function shareJoinURL() {
    if(navigator.share){
      navigator.share({title: 'Game invitation', url: getGameURL(game)})
    }else {
      if(navigator.clipboard) {
        navigator.clipboard.writeText(getGameURL(game))
      }
    }
  }

  return (
    <HeaderFooter className={classes.root}>
      <Paper>
        <ul>
          <li><b>Seed: </b> {game.seed}</li>
          <li><b>Round: </b> {game.round}</li>
          <li><b>Player: </b> {game.player}</li>
          <li><b>Cards: </b> ["{game.orderedCards.join('", "')}"]</li>
        </ul>
      </Paper>
      <Paper className={classes.mainCard}>{game.card}</Paper>
      <Button variant="contained" color="primary" onClick={shareJoinURL}>Share</Button>
    </HeaderFooter>
  );
}
