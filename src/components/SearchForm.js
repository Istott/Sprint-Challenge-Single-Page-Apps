import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Character from "./CharacterCard";
import Locations from "./LocationCard";
import Episode from "./EpisodeCard";
import styled from "styled-components";


const TopCard = styled.div`
  background-color: lightgray;
`;

const NavCard = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;


function AppRouter() {
  return (
    <Router>
      <div>
        <TopCard>
          <nav className="main-nav">
            <NavCard>
              <h2>
                <Link to="/">Character</Link>
              </h2>
              <h2>
                <Link to="/Locations">Locations</Link>
              </h2>
              <h2>
                <Link to="/Episode">Episodes</Link>
              </h2>
            </NavCard>
          </nav>
        </TopCard>

        <Switch>
          <Route path="/Episode" component={Episode} />
          <Route path="/Locations" component={Locations} />
          <Route path="/" component={Character} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;

