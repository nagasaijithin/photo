import React from "react";
import { Route } from "react-router-dom";

////main page components
import HomePage from "./pages/homepage";

/// components
import NavBar from "./components/nav.component";
function App() {
  return (
    <div>
      <NavBar />
      <Route path="/" exact component={HomePage} />
    </div>
  );
}

export default App;
