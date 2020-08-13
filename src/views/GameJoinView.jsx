import React, { useContext, useState, useEffect } from 'react';
import HeaderFooter from '../components/HeaderFooter';
import useStyles from './GameJoinViewStyles';
import { GameDispatchContext } from '../contexts/GameContext';
import { useLocation, useHistory } from 'react-router-dom';
import GraphemeSplitter from 'grapheme-splitter';

export default function GameJoinView() {
  const classes = useStyles();
  const [wrongURL, setWrongURL] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatchGame = useContext(GameDispatchContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if(queryParams.has('s') && queryParams.has('c')){
      const seed = queryParams.get('s');

      const cardsString = queryParams.get('c');
      const splitter = new GraphemeSplitter();
      const orderedCards = splitter.splitGraphemes(cardsString);
    
      dispatchGame({type: 'beginGame', payload: {seed, orderedCards}})
  
      history.replace('/game');
      setWrongURL(false);
    } else {
      setWrongURL(true);
    }
  }, [dispatchGame, history, location]);

  return (
    <HeaderFooter className={classes.root}>
      { wrongURL ? (
      <p>Wrong url</p>
      ) : (
      <p>Loading your game</p>
      )}
    </HeaderFooter>
  );
}
