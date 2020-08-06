import React, { useContext } from 'react';
import { GameContext, defaultSeed } from '../../contexts/GameContext';
import PrivateRoute from './PrivateRoute';


export default function HasGameRoute({ children, ...rest }) {
  const game = useContext(GameContext);

  return (
    <PrivateRoute {...rest} condition={game.seed !== defaultSeed} redirectPath="/game/new">
      {children}
    </PrivateRoute>
  );
}
