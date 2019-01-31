export default {
  terran: {
    units: [
      {
        id: 1,
        name: "Marine",
        description: "Ground Unit",
        builtFrom: "Barrak",
        cost: { minerals: 50, gas: 0, time: 18, supply: 1 },
        attributes: ["Biological", "Light"],
        hp: "45(+10)",
        armor: "0(+1)",
        attack: {
          target: ["ground", "air"],
          damage: "6(+1)",
          dps: "9.8(+1.6); 14.7 (+2.4)(Stimpack)",
          cooldown: "0.61(-0.203)",
          range: 5
        },
        sight: 9,
        speed: "3.15(+1.57)",
        cargoSize: 1,
        strongAgainst: ["Hydralisk", "Immortal", "Marauder"],
        weakAgainst: ["Baneling", "Colossus", "Siege Tank"]
      },
      {
        id: 2,
        name: "Marauder",
        description: "Ground Unit",
        builtFrom: "Barrak",
        cost: { minerals: 100, gas: 25, time: 21, supply: 2 },
        attributes: ["Biological", "Armored"],
        hp: "125",
        armor: "1(+1)",
        attack: {
          target: ["ground"],
          damage: "10(+1)",
          dps: "9.3(+0.93); 14.1(+1.4)(Stimpack)",
          cooldown: "1.07(-0.36)",
          range: 6,
          bonus: "+10(+1) vs Armored",
          extra: "Slows targeted units(Concussive Shells)"
        },
        sight: 10,
        speed: "3.15(+1.57)",
        cargoSize: 2,
        strongAgainst: ["Stalker", "Roach", "Thor"],
        weakAgainst: ["Marine", "Zergling", "Zealot"]
      },
      {
        id: 3,
        name: "Reaper",
        description: "Ground Unit",
        builtFrom: "Barrak",
        cost: { minerals: 50, gas: 50, time: 32, supply: 1 },
        attributes: ["Biological", "Armored"],
        hp: "125",
        armor: "1(+1)",
        attack: {
          target: ["ground"],
          damage: "4(+1)(x2)",
          dps: "10.1(+2.5)",
          cooldown: "0.79",
          range: 5
        },
        sight: 9,
        speed: 5.25,
        cargoSize: 1,
        strongAgainst: ["Probe", "SCV", "Drone"],
        weakAgainst: ["Stalker", "Marauder", "Roach"]
      },
      {
        id: 4,
        name: "Ghost",
        description: "Ground Unit",
        builtFrom: "Barrak",
        requirements: "Ghost Academy",
        cost: { minerals: 150, gas: 125, time: 29, supply: 2 },
        attributes: ["Biological", "Psionic"],
        hp: "100",
        armor: "0(+1)",
        attack: {
          target: ["ground", "air"],
          damage: "10(+1)",
          dps: "9.3(+0.93)",
          cooldown: "1.07",
          bonus: "+10(+1) vs Light",
          range: 6
        },
        energy: "75 / 200",
        sight: 11,
        speed: 3.94,
        cargoSize: 2,
        strongAgainst: ["High Templar", "Raven", "Infestor"],
        weakAgainst: ["Stalker", "Marauder", "Zergling"]
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
    units: [
      {
        id: 21,
        name: "Zergling",
        description: "Ground Unit",
        requirements: "Spawning Pool",
        cost: { minerals: 25, gas: 0, time: 17, supply: 0.5 },
        attributes: ["Biological", "Light"],
        hp: "35",
        armor: "0(+1)",
        attack: {
          target: ["ground"],
          damage: "5(+1)",
          dps: "10(+2); 14.3 (+2.86) (Adrenal Glands)",
          cooldown: "0.497 (-0.143)",
          bonus: "+10(+1) vs Light",
          range: 0.1
        },
        energy: "75 / 200",
        sight: 8,
        speed: "4.13 (+2.45)",
        speedOnCreep: "5.37(+3.18)",
        morphsInto: "Baneling",
        cargoSize: 1,
        strongAgainst: ["Marauder", "Stalker", "Hydralisk"],
        weakAgainst: ["Hellion", "Colossus", "Baneling"]
      },
      {
        id: 22,
        name: "Baneling",
        description: "Ground Unit",
        requirements: "Baneling Nest",
        cost: { minerals: 25, gas: 25, time: 14, supply: 0.5 },
        attributes: ["Biological"],
        hp: "30 (+5)",
        armor: "0(+1)",
        attack: {
          target: ["ground"],
          damage: "20 (+2) (Splash)",
          cooldown: "none",
          bonus: "+15 (+2) vs Light",
          range: "0.25 (melee) 2.20(AoE)"
        },
        attack2: {
          target: ["Buildings"],
          damage: "80 (+5) (Splash)",
          cooldown: "none",
          bonus: "+15 (+2) vs Light",
          range: "0.25 (melee) 2.20(AoE)"
        },
        sight: 8,
        speed: "3.5 (+0.63)",
        speedOnCreep: "4.55 (+0.82)",
        morphsInto: "Baneling",
        cargoSize: 2,
        strongAgainst: ["Marine", "Zealot", "Zergling"],
        weakAgainst: ["Marauder", "Stalker", "Roach"]
      }
    ],
    buildings: []
  },
  protoss: {
    units: [
      {
        id: 31,
        name: "Zealot",
        description: "Ground Unit",
        builtFrom: "Gateway",
        cost: { minerals: 100, gas: 50, time: 27, supply: 2 },
        attributes: ["Biological", "Armored"],
        hp: "125",
        armor: "1(+1)",
        attack: {
          target: ["ground"],
          damage: "8 (+1) (x2)",
          dps: "18.6 (+2.33)",
          cooldown: "0.86",
          range: 0.1
        },
        sight: 9,
        speed: "3.15; 4.13(+ 4.62) with Charge",
        cargoSize: 2,
        strongAgainst: ["Marauder", "Immortal", "Zergling"],
        weakAgainst: ["Hellion", "Colossus", "Roach"]
      }
    ],
    buildings: []
  }
};
