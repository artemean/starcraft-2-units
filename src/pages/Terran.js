import React from "react";
import Main from "../components/Main";
import UnitCard from "../components/UnitCard";
import data from "../data";

export default function Terran({ location }) {
  return (
    <Main location={location}>
      <div className="card terran-card">
        <h2>Terran</h2>
        {data.terran.units.map(item => (
          <UnitCard data={item} />
        ))}
      </div>
    </Main>
  );
}
