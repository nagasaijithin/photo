import React from "react";
import { Route, Redirect } from "react-router-dom";

////main page components
import HomePage from "./pages/homepage";

/// components
import NavBar from "./components/nav.component";
function App() {
  return (
    <div>
      <NavBar />
      <Route
        path="/"
        exact
        render={() => <Redirect from={"/"} to={"/latestimages/1"} />}
      />
      <Route path="/latestimages/:id" exact component={HomePage} />
    </div>
  );
}

export default App;
