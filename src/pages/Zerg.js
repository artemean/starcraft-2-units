import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "../components/Main";
import UnitCard from "../components/UnitCard";
import data from "../data";

export default function Index({ location }) {
  return (
    <Main location={location}>
      <div className="card zerg-card">
        <h2>Zerg</h2>
        <ul>
          {data.zerg.units.map(item => (
            <li key={item.id}>
              <Link to={`/zerg/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Route path="/zerg/:unit" component={UnitCard} />
      </div>
    </Main>
  );
}
