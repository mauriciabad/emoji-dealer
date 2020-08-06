import React from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import GameView from './views/GameView';
import GameJoinView from './views/GameJoinView';
import GameNewView from './views/GameNewView';
import GlobalContext from './contexts/GlobalContext';
import HasGameRoute from './components/routes/HasGameRoute';

export default function App() {

  return (
    <GlobalContext>
      <Switch>
        {/* <Route        exact path="/"          children={<HomeView />} /> */}
        <Redirect     exact path='/' to="/game/new" />
        <HasGameRoute exact path="/game"      children={<GameView />} />
        <Route        exact path="/game/join" children={<GameJoinView />} />
        <Route        exact path="/game/new"  children={<GameNewView />} />
        <Redirect to='/' />
      </Switch>
    </GlobalContext>
  );
}
