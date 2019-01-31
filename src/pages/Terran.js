import React from "react";
import { Route, Link } from "react-router-dom";
import Main from "../components/Main";
import UnitCard from "../components/UnitCard";
import data from "../data";

export default function Terran({ location }) {
  return (
    <Main location={location}>
      <div className="card terran-card">
        <h2>Terran</h2>
        <ul>
          {data.terran.units.map(item => (
            <li key={item.id}>
              <Link to={`/terran/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Route path="/terran/:unit" component={UnitCard} />
      </div>
    </Main>
  );
}
