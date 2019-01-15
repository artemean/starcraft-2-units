import React from "react";
import Main from "../components/Main";

export default function Index({ location }) {
  return (
    <Main location={location}>
      <div className="card zerg-card">
        <h2>Zerg</h2>
      </div>
    </Main>
  );
}
