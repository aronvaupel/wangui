import React from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import Home from './pages/Home/Home';
import HomeDesktop from './pages/Home/HomeDesktop';
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
          <HomeDesktop />
        </Route>
       
        <MediaQuery query="(max-device-width: 768px)"> 
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route path="/location">
          <Location  />
        </Route>
        <Route path="/">
          <Home />
        </Route>
       </MediaQuery>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

