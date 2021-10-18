import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location'



function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route path="/location">
          <Location  />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;

