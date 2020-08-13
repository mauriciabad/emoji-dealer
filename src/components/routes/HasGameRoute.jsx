import React, { useContext } from 'react';
import { GameContext, defaultSeed } from '../../contexts/GameContext';
import PrivateRoute from './PrivateRoute';
import { useLocation } from 'react-router-dom';

export default function HasGameRoute({ children, ...rest }) {
  const game = useContext(GameContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hasParams = (queryParams.has('s') && queryParams.has('c'));

  return (
    <PrivateRoute {...rest} condition={game.seed !== defaultSeed || hasParams} redirectPath="/new">
      {children}
    </PrivateRoute>
  );
}
