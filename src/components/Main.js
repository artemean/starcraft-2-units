import React from "react";

export default function Main({ location, children }) {
  const style = {
    position: "fixed",
    top: 100,
    left: 0,
    right: 0,
    zIndex: -1000,
    width: "100%"
  };
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}
