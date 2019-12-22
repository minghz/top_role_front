import * as dataParsers from './dataParsers'
import RacesData from '../data/races.json';
import BackgroundsInfoData from '../data/backgrounds-info.json';
import ClassesData from '../data/classes.json';

jest.mock('../data/classes.json', ()=>([
  {
    "name": "Barbarian",
    "hitDice": {
      "number": 1,
      "faces": 12
    },
    "proficiencies": {
      "savingThrow": ['str', 'dex', 'con'],
      "armor": ["light", "medium"],
      "weapons": ["simple", "martial"],
      "tools": ['flute', 'Herbalism kit']
    }
  },
  {
    "name": "Dummy",
    "proficiencies": {}
  }
]))

test('#savingProficienciesFromClass', () => {
  var expectedSaveProficiencies = {
    str: true,
    dex: true,
    con: true,
    int: false,
    wis: false,
    cha: false
  }

  expect(dataParsers.savingProficienciesFromClass('Barbarian')).toEqual(expectedSaveProficiencies);
});

test('#hitDiceNumberFromClass', () => {
  expect(dataParsers.hitDiceNumberFromClass('Barbarian')).toBe(12);
});

test('#armorProficienciesFromClass', () => {
  expect(dataParsers.armorProficienciesFromClass('Barbarian')).toBe("light, medium");
  expect(dataParsers.armorProficienciesFromClass('Dummy')).toBe("none");
});

test('#weaponProficienciesFromClass', () => {
  expect(dataParsers.weaponProficienciesFromClass('Barbarian')).toBe("simple, martial");
  expect(dataParsers.weaponProficienciesFromClass('Dummy')).toBe("none");
});

test('#toolProficienciesFromClass', () => {
  expect(dataParsers.toolProficienciesFromClass('Barbarian')).toBe("flute, Herbalism kit");
  expect(dataParsers.toolProficienciesFromClass('Dummy')).toBe("none");
});

jest.mock('../data/races.json', ()=>([
  {
    "name": "Orc",
    "attributes": {
      "str": 4,
      "int": -2,
      "wis": -2,
      "cha": -2
    }
  }
]));
test('#racialAttributes', () => {
  var expectedRacialAttributes = {
    str: 4,
    dex: 0,
    con: 0,
    int: -2,
    wis: -2,
    cha: -2
  }
  expect(dataParsers.racialAttributes('Orc')).toEqual(expectedRacialAttributes);
});

jest.mock('../data/backgrounds-info.json', ()=>([
  {
    "name": "Developer",
    "entries": [
      "You sit in front of the computer all day",
      "Sometimes, talk to people too"
    ]
  }
]));
test('#backgroundParagraphs', () => {
  var expectedBackgroundEntries = [
    "You sit in front of the computer all day",
    "Sometimes, talk to people too"
  ]

  expect(dataParsers.backgroundParagraphs('Developer')).toEqual(expectedBackgroundEntries);
});
