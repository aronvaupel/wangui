import React from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import Home from "./pages/Home/Home";
import HomeDesktop from "./pages/Home/HomeDesktop";
import Location from "./pages/Location/Location";

function App(): JSX.Element {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <BrowserRouter>
      <Switch>
        {isMobile ? (
          <>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
            <Route path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/">
              <HomeDesktop />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
