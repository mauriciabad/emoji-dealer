import React from 'react';
import { GameContextProvider } from './GameContext';

export default function globalContext(props) {
  return (
    <GameContextProvider>
      {props.children}
    </GameContextProvider>
  );
}