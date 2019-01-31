import React from "react";
import data from "../data";

export default function UnitCard({ match }) {
  const race = match.url.split("/")[1];
  const unit = match.url.split("/")[2];
  const unitData = data[race].units.find(el => el.name === unit);

  return (
    <div key={unitData.id}>
      <table className="unit-card">
        <tr>
          <td className="unit-prop">Unit name:</td>
          <td>{unitData.name}</td>
        </tr>
        <tr>
          <td className="unit-prop">Production building:</td>
          <td>{unitData.builtFrom}</td>
        </tr>
        <tr>
          <td className="unit-prop">Cost:</td>
          <td>
            <span className="unit-card__attr">
              Minerals: {unitData.cost && unitData.cost.minerals}
            </span>
            <span className="unit-card__attr">
              Gas: {unitData.cost && unitData.cost.gas}
            </span>
            <span className="unit-card__attr">
              Time: {unitData.cost && unitData.cost.time}
            </span>
            <span className="unit-card__attr">
              Supply: {unitData.cost && unitData.cost.supply}
            </span>
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Attributes</td>
          <td>
            {unitData.attributes &&
              unitData.attributes.map(el => (
                <span className="unit-card__attr">{el}</span>
              ))}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">HP (life)</td>
          <td>{unitData.hp}</td>
        </tr>
        <tr>
          <td className="unit-prop">Attack</td>
          <td>
            <span className="unit-prop__key">Target:</span>
            {unitData.attack.target.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
            <span className="unit-prop__key">Damage:</span>
            {unitData.attack.damage}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Armor</td>
          <td>{unitData.armor}</td>
        </tr>
        <tr>
          <td className="unit-prop">Sight</td>
          <td>{unitData.sight}</td>
        </tr>
        <tr>
          <td className="unit-prop">Speed</td>
          <td>{unitData.speed}</td>
        </tr>
        <tr>
          <td className="unit-prop">Cargo size</td>
          <td>{unitData.cargoSize}</td>
        </tr>
        <tr>
          <td className="unit-prop">Strong against</td>
          <td>
            {unitData.strongAgainst.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
          </td>
        </tr>
        <tr>
          <td className="unit-prop">Weak against</td>
          <td>
            {unitData.weakAgainst.map(el => (
              <span className="unit-card__attr">{el}</span>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}
