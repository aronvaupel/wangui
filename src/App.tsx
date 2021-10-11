import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

