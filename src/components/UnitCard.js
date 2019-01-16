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
          <td className="unit-prop">HP (life)</td>
          <td>{data.hp}</td>
        </tr>
        <tr>
          <td className="unit-prop">Attack</td>
          <td>
            <span className="unit-prop__key">Target:</span>
            {data.attack.target.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
            <span className="unit-prop__key">Damage:</span>
            {data.attack.damage}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Armor</td>
          <td>{data.armor}</td>
        </tr>
        <tr>
          <td className="unit-prop">Sight</td>
          <td>{data.sight}</td>
        </tr>
        <tr>
          <td className="unit-prop">Speed</td>
          <td>{data.speed}</td>
        </tr>
        <tr>
          <td className="unit-prop">Cargo size</td>
          <td>{data.cargoSize}</td>
        </tr>
        <tr>
          <td className="unit-prop">Strong against</td>
          <td>
            {data.strongAgainst.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Weak against</td>
          <td>
            {data.weakAgainst.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}
