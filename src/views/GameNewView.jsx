import React, { useState, useContext, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameNewViewStyles';
import { TextField, Paper, Button, Typography } from '@material-ui/core';
import { GameContext } from '../contexts/GameContext';
import { GameDispatchContext, getGameURL } from '../contexts/GameContext';
import { useHistory } from 'react-router-dom';
import GraphemeSplitter from 'grapheme-splitter';

export default function GameNewView() {
  const classes = useStyles();
  const game = useContext(GameContext);
  const dispatchGame = useContext(GameDispatchContext);
  let [cardsString, setCardsString] = useState(game.orderedCards.join(''));
  const history = useHistory();

  const [showError, setShowError] = useState(false);

  const shareJoinURL = () => {
    const invitationURL = getGameURL(game);

    if(navigator.share){
      navigator.share({text: `Room: ${game.seed}\nCards: ${game.orderedCards.join('')}\n${game.round > 1 ? `Round: ${game.round}\n` : ''}\n${invitationURL}`})
    }
  }

  function handleCardsStringChange(e) {
    setCardsString(e.target.value.replace(/\s/g, ''));
  }

  function handleCreateClick() {
    if(cardsString !== ''){
      setShowError(false);

      const splitter = new GraphemeSplitter();
      const orderedCards = splitter.splitGraphemes(cardsString);

      dispatchGame({type: 'beginGame', payload: { orderedCards, player: 1 }});
      // continues in useEffect
    } else {
      setShowError(true);
    }
  }
  
  useEffect(() => {
    return () => {
      history.replace('/');
      shareJoinURL();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.seed]);

  return (
    <HeaderFooter className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">Emoji list</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={3}
          autoFocus
          defaultValue={cardsString}
          variant="outlined"
          className={classes.textArea}
          value={cardsString}
          onChange={handleCardsStringChange}
          required="true"
          InputProps={{
            classes: {
              input: classes.textAreaInput,
            },
          }}
          error={showError}
          helperText={showError && "Enter some emojis"}
        />
      </Paper>
      <Button variant="contained" color="primary" onClick={handleCreateClick}>Create</Button>
    </HeaderFooter>
  );
}
