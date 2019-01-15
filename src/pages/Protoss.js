import React from "react";
import Main from "../components/Main";

export default function Index({ location }) {
  return (
    <Main location={location}>
      <div className="card protoss-card">
        <h2>Protoss</h2>
      </div>
    </Main>
  );
}
