import React from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

////main page components
import NavBar from "./components/nav.component";
import HomePage from "./pages/homepage";
import SearchPage from "./pages/searchpage";
import CollectionsPage from "./pages/collectionspage";
import CollectionPage from "./pages/collectionpage";

/// components
const HomepageContiner = styled.div`
  max-width: ${(props) => props.theme.continer};
  margin: 0 auto;
  padding: 3rem;
`;
function App() {
  return (
    <div>
      <NavBar />
      <HomepageContiner>
        <Route
          path="/"
          exact
          render={() => <Redirect from={"/"} to={"/latestimages/1"} />}
        />
        <Route path="/latestimages/:id" exact component={HomePage} />
        <Route path="/search/:query/:id" exact component={SearchPage} />
        <Route path="/collections/:id" exact component={CollectionsPage} />
        <Route path="/collection/:clid/:id" exact component={CollectionPage} />
      </HomepageContiner>
    </div>
  );
}

export default App;
