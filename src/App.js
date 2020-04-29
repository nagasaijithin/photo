import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

////main page components
import NavBar from "./components/nav.component";
import MainLoder from "./components/loder.component";
import FofComponent from "./components/404.component";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/searchpage";
import CollectionsPage from "./pages/collectionspage";
import CollectionPage from "./pages/collectionpage";
import PhotoPopuppage from "./pages/PhotoPopuppage";

/// styled-components
const HomepageContiner = styled.div`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  padding: 3rem;
  @media ${(props) => props.theme.mediaQuery.mediaMid3} {
    padding: 2rem;
  }
`;

function App({ state }) {
  return (
    <>
      <NavBar />
      {state.mainloader && <MainLoder />}
      <HomepageContiner>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect from={"/"} to={"/latestimages/1"} />}
          />
          <Route path="/latestimages/:id" exact component={HomePage} />
          <Route path="/search/:query/:id" exact component={SearchPage} />
          <Route path="/collections/:id" exact component={CollectionsPage} />
          <Route
            path="/collection/:clid/:id"
            exact
            component={CollectionPage}
          />
          <Route path="/photo/:pid" exact component={PhotoPopuppage} />
          <Route component={FofComponent} />
        </Switch>
      </HomepageContiner>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps)(App);
