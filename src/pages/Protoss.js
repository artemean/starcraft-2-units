import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "../components/Main";
import UnitCard from "../components/UnitCard";
import data from "../data";

export default function Index({ location }) {
  return (
    <Main location={location}>
      <div className="card protoss-card">
        <h2>Protoss</h2>
        <ul>
          {data.protoss.units.map(item => (
            <li key={item.id}>
              <Link to={`/protoss/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Route path="/protoss/:unit" component={UnitCard} />
      </div>
    </Main>
  );
}
