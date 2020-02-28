// import React, { useState } from "react";

// export default function SearchForm() {
 
//   return (
//     <section className="search-form">
//      // Add a search form here
//     </section>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./CharacterCard";
import Locations from "./LocationCard";
function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Character</Link>
            </li>
            <li>
              <Link to="/Locations">Locations</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Locations" component={Locations} />
          <Route path="/" component={Character} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;

