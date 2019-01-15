import React from "react";

export default function UnitCard({ data }) {
  return (
    <div key={data.id}>
      <table className="unit-card">
        <tr>
          <td className="unit-prop">Unit name:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td className="unit-prop">Production building:</td>
          <td>{data.builtFrom}</td>
        </tr>
        <tr>
          <td className="unit-prop">Cost:</td>
          <td>
            <span className="unit-card__attr">
              Minerals: {data.cost && data.cost.minerals}
            </span>
            <span className="unit-card__attr">
              Gas: {data.cost && data.cost.gas}
            </span>
            <span className="unit-card__attr">
              Time: {data.cost && data.cost.time}
            </span>
            <span className="unit-card__attr">
              Supply: {data.cost && data.cost.supply}
            </span>
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Attributes</td>
          <td>
            {data.attributes &&
              data.attributes.map(el => (
                <span className="unit-card__attr">{el}</span>
              ))}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">HP</td>
          <td>{data.hp}</td>
        </tr>
      </table>
    </div>
  );
}
