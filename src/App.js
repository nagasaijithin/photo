import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { init } from "./actions";
import { connect } from "react-redux";
////main page components
import HomePage from "./pages/homepage";

/// components
import NavBar from "./components/nav.component";
function App({ init }) {
  useEffect(() => {
    // init();
  }, []);
  return (
    <div>
      <NavBar />
      <Route
        path="/"
        exact
        render={() => <Redirect from={"/"} to={"/latestimages/:id"} />}
      />
      <Route path="/latestimages/:id" exact component={HomePage} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { init })(App);