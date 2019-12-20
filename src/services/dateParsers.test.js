import * as dataParsers from './dataParsers'
import RacesData from '../data/races.json';
import BackgroundsData from '../data/backgrounds.json';
import ClassesData from '../data/classes.json';

jest.mock('../data/classes.json', ()=>([
  {
    "name": "Barbarian",
    "proficiencies": {
      "savingThrow": ['str', 'dex', 'con']
    }
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

jest.mock('../data/backgrounds.json', ()=>([
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
