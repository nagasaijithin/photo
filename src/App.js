import React from "react";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

////main page components
import HomePage from "./pages/homepage";
import SearchPage from "./pages/searchpage";
import NavBar from "./components/nav.component";

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
      </HomepageContiner>
    </div>
  );
}

export default App;
