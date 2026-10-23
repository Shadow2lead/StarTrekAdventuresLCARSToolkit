window.STA_FLEET_HANGAR = [
  {
    "id": "uss-artemis-ncc-71822",
    "name": "USS Artemis",
    "registry": "NCC-71822",
    "spaceframe": "Excelsior Class",
    "missionProfile": "Multirole Explorer",
    "serviceRecord": "Dependable Workhorse",
    "scale": 5,
    "resistance": 5,
    "shieldsCurrent": 14,
    "shieldsMax": 14,
    "reservePower": true,
    "reservePowerSystem": "",
    "crewSupportCurrent": 5,
    "crewSupportMax": 5,
    "systems": { "comms": 9, "computers": 9, "engines": 10, "sensors": 9, "structure": 10, "weapons": 9 },
    "departments": { "command": 3, "conn": 2, "security": 2, "engineering": 3, "science": 2, "medicine": 2 },
    "breaches": { "comms": 0, "computers": 0, "engines": 0, "sensors": 0, "structure": 0, "weapons": 0 },
    "traits": ["Federation Starship", "Excelsior Class"],
    "talents": [
      { "name": "Improved Impulse Drive", "desc": "When the flight controller succeeds at the Impulse, Attack Pattern, Evasive Action, or Ramming Speed actions, they may spend 2 Momentum to increase the Difficulty of attacks against the ship by 1 until the start of their next turn." },
      { "name": "Secondary Reactors", "desc": "Additional fusion and impulse reactors allow the ship to generate far greater quantities of energy." }
    ],
    "weapons": [
      { "name": "Phaser Banks", "damage": "8 (Scale 5 + 1 + Wpn Bonus 2)", "qualities": "Medium Range, Versatile 2" },
      { "name": "Photon Torpedoes", "damage": "5 (Base 3 + Wpn Bonus 2)", "qualities": "Long Range, High-Yield" },
      { "name": "Tractor Beam", "damage": "Strength 4", "qualities": "Close Range, Opposed (Diff = Strength to escape)" }
    ]
  },
  {
    "id": "type-6-shuttlecraft",
    "name": "Galileo (Type-6 Shuttle)",
    "registry": "NCC-71822/01",
    "spaceframe": "Type-6 Shuttlecraft",
    "missionProfile": "Personnel Transport",
    "serviceRecord": "Standard Craft",
    "scale": 1,
    "resistance": 1,
    "shieldsCurrent": 6,
    "shieldsMax": 6,
    "reservePower": true,
    "reservePowerSystem": "",
    "crewSupportCurrent": 0,
    "crewSupportMax": 0,
    "systems": { "comms": 7, "computers": 7, "engines": 7, "sensors": 6, "structure": 5, "weapons": 4 },
    "departments": { "command": 1, "conn": 2, "security": 0, "engineering": 1, "science": 1, "medicine": 0 },
    "breaches": { "comms": 0, "computers": 0, "engines": 0, "sensors": 0, "structure": 0, "weapons": 0 },
    "traits": ["Federation Shuttlecraft", "Small Craft"],
    "talents": [
      { "name": "Rugged Design", "desc": "When attempting a task to repair the ship, the first d20 purchased is free." }
    ],
    "weapons": [
      { "name": "Phaser Emitters", "damage": "2 (Scale 1 + 1 + Wpn Bonus 0)", "qualities": "Medium Range, Versatile 2" }
    ]
  }
];

