import React, { useState, useContext } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameNewViewStyles';
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import { GameDispatchContext } from '../contexts/GameContext';
import { useHistory } from 'react-router-dom';

export default function GameNewView() {
  const classes = useStyles();
  let [cardsString, setCardsString] = useState('');
  const dispatchGame = useContext(GameDispatchContext);
  const history = useHistory();


  function handleCardsStringChange(e) {
    setCardsString(e.target.value);
  }

  function handleCreateClick() {
    const orderedCards = cardsString
      .split('\n')
      .map((val) => val.trim())
      .filter((val) => val !== '');

      dispatchGame({type: 'beginGame', payload: { orderedCards }});
      history.replace('/game');
  }

  return (
    <HeaderFooter className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Emoji list</Typography>
        <Typography variant="body1">Each line is a card</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          defaultValue={cardsString}
          variant="outlined"
          className={classes.textArea}
          value={cardsString} onChange={handleCardsStringChange}
        />
      </Paper>
      <Button variant="contained" color="primary" onClick={handleCreateClick}>Create</Button>
    </HeaderFooter>
  );
}
