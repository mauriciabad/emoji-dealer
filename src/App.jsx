import React from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';
import GameView from './views/GameView';
import GameNewView from './views/GameNewView';
import GlobalContext from './contexts/GlobalContext';
import HasGameRoute from './components/routes/HasGameRoute';

export default function App() {

  return (
    <GlobalContext>
      <Switch>
        <HasGameRoute exact path="/"      children={<GameView />} />
        <Route        exact path="/new"  children={<GameNewView />} />
        <Redirect to='/' />
      </Switch>
    </GlobalContext>
  );
}
