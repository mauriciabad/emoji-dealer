import React from 'react';
import {Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, condition, redirectPath, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => condition ? ( 
          children 
        ) : (
          <Redirect to={{ pathname: redirectPath, state: { from: location } }} />
        )
      }
    />
  );
}