export default {
  terran: {
    units: [
      {
        id: 1,
        name: "Marine",
        builtFrom: "Barrak",
        cost: { minerals: 50, gas: 0, time: 18, supply: 1 },
        attributes: ["Biological", "Light"],
        hp: "45(+10)",
        attack: {
          target: ["ground", "air"],
          damage: "6(+1)"
        },
        armor: "0(+1)",
        sight: 9,
        speed: "3.15(+1.57)",
        cargoSize: 1,
        strongAgainst: ["Hydralisk", "Immortal", "Marauder"],
        weakAgainst: ["Baneling", "Colossus", "Siege Tank"]
      },
      {
        id: 2,
        name: "Marauder",
        builtFrom: "Barrak",
        cost: { minerals: 50, gas: 0, time: 18, supply: 1 },
        attributes: ["Biological", "Light"],
        hp: "45(+10)",
        attack: {
          target: ["ground", "air"],
          damage: "6(+1)"
        },
        armor: "0(+1)",
        sight: 9,
        speed: "3.15(+1.57)",
        cargoSize: 1,
        strongAgainst: ["Hydralisk", "Immortal", "Marauder"],
        weakAgainst: ["Baneling", "Colossus", "Siege Tank"]
      },
      {
        id: 3,
        name: "Reaper",
        builtFrom: "Barrak",
        attributes: ["Biological", "Light"],
        hp: "45(+10)",
        attack: {
          target: ["ground", "air"],
          damage: "6(+1)"
        },
        armor: "0(+1)",
        sight: 9,
        speed: "3.15(+1.57)",
        cargoSize: 1,
        strongAgainst: ["Hydralisk", "Immortal", "Marauder"],
        weakAgainst: ["Baneling", "Colossus", "Siege Tank"]
      },
      {
        id: 4,
        name: "Siege tank",
        builtFrom: "Factory",
        attributes: ["Biological", "Light"],
        hp: "45(+10)",
        attack: {
          target: ["ground", "air"],
          damage: "6(+1)"
        },
        armor: "0(+1)",
        sight: 9,
        speed: "3.15(+1.57)",
        cargoSize: 1,
        strongAgainst: ["Hydralisk", "Immortal", "Marauder"],
        weakAgainst: ["Baneling", "Colossus", "Siege Tank"]
      }
    ],
    buildings: [
      {
        id: 1,
        name: "Command Center"
      },
      {
        id: 2,
        name: "Barrak"
      },
      {
        id: 3,
        name: "Factory"
      },
      {
        id: 4,
        name: "Star Port"
      }
    ]
  },
  zerg: {
    units: [],
    buildings: []
  },
  protoss: {
    units: [],
    buildings: []
  }
};
