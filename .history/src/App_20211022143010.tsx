import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import Home from "./pages/Home/Home";
import HomeDesktop from "./pages/Home/HomeDesktop";
import Location from "./pages/Location/Location";
import LocationDesktop from "./pages/Location/LocationDesktop";

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <BrowserRouter>
      <Switch>
        {isMobile ? (
          <>
            <Route exact path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/disclaimer">
              <DisclaimerDesktop />
            </Route>
            <Route exact path="/location">
              <LocationDesktop />
            </Route>
            <Route exact path="/">
              <HomeDesktop />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
