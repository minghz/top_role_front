import * as dataParsers from './dataParsers'
import RacesData from '../data/races.json';
import BackgroundsInfoData from '../data/backgrounds-info.json';
import BackgroundsData from '../data/backgrounds-full.json';
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
      "tools": ['flute', 'Herbalism kit'],
      "skills": [
        {
          "choose": {
            "from": ["animal handling", "athletics"],
            "count": 1
          }
        }
      ]
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

test('#skillChoicesFromClass', () => {
  let expectedChoiceObj = {
    "from": ["animalHandling", "athletics"],
    "count": 1
  }
  expect(dataParsers.skillChoicesFromClass('Barbarian')).toEqual(expectedChoiceObj);
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

jest.mock('../data/backgrounds-full.json', ()=>([
  {
    "name": "Developer",
    "proficiencies": {
      "skills": [
        'animal handling',
        'religion'
      ],
      "languages": ['2 of your choice'],
      "tools": ['keyboard', 'mouse']
    },
    "specialty": {},
    "equipment": "Keyboard, mouse, computer"
  },
  {
    "name": "Artist",
    "proficiencies": {
      "languages": [],
      "tools": []
    },
    "feature": {
      "name": "Feature: Angst",
      "description": [
        "You can channel artistic energy via angst"
      ]
    },
    "specialty": {
      "label": "Bluff",
      "description": "You must be able to sell your art",
      "rollDice": {
        "faces": "4"
      },
      "rolls": {
        "1": "Bad liar",
        "2": "Slippery tongue",
        "3": "Grey tonge",
        "4": "Don't brush teeth"
      }
    },
    "suggested_characteristics": {
      "description": "Nobles are born and raised to a very different lifestyle than most people ever experience, and their personalities reflect that upbringing. A noble title comes with a plethora of bonds—responsibilities to family, to other nobles (including the sovereign), to the people entrusted to the family's care, or even to the title itself. But this responsibility is often a good way to undermine a noble.",
      "characteristics": [
        {
          "label": "Personality Trait",
          "rollDice": {
            "faces": "8"
          },
          "rolls": {
            "1": "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
            "2": "The common folk love me for my kindness and generosity.",
            "3": "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
            "4": "I take great pains to always look my best and follow the latest fashions.",
            "5": "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
            "6": "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
            "7": "My favor, once lost, is lost forever.",
            "8": "If you do me an injury, I will crush you, ruin your name, and salt your fields."
          }
        }
      ]
    }
  }
]));

test('#skillProfsFromBackground', () => {
  var expectedProfs = ['animalHandling', 'religion']
  expect(dataParsers.skillProfsFromBackground('Developer')).toEqual(expectedProfs);
});

test('#languagesFromBackground', () => {
  expect(dataParsers.languagesFromBackground('Developer')).toEqual('2 of your choice');
  expect(dataParsers.languagesFromBackground('Artist')).toEqual('none');
});

test('#toolProfsFromBackground', () => {
  expect(dataParsers.toolProfsFromBackground('Developer')).toEqual('keyboard, mouse');
  expect(dataParsers.languagesFromBackground('Artist')).toEqual('none');
});

test('#featureFromBackground', () => {
  let expectedFeature = {
    name: 'Feature: Angst',
    description: ["You can channel artistic energy via angst"]
  }
  expect(dataParsers.featureFromBackground('Artist')).toEqual(expectedFeature);
});

test('#specialtyFromBackground', () => {
  let expectedSpecialty = {
    "label": "Bluff",
    "description": "You must be able to sell your art",
    "rollDice": {
      "faces": "4"
    },
    "rolls": {
      "1": "Bad liar",
      "2": "Slippery tongue",
      "3": "Grey tonge",
      "4": "Don't brush teeth"
    }
  }
  expect(dataParsers.specialtyFromBackground('Artist')).toEqual(expectedSpecialty);
});

test('#specialtyFromBackground empty', () => {
  expect(dataParsers.specialtyFromBackground('Developer')).toEqual({});
});

test('#characteristicFromBackground', () => {
  let expectedCharacteristic = {
    "description": "Nobles are born and raised to a very different lifestyle than most people ever experience, and their personalities reflect that upbringing. A noble title comes with a plethora of bonds—responsibilities to family, to other nobles (including the sovereign), to the people entrusted to the family's care, or even to the title itself. But this responsibility is often a good way to undermine a noble.",
    "characteristics": [
      {
        "label": "Personality Trait",
        "rollDice": {
          "faces": "8"
        },
        "rolls": {
          "1": "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
          "2": "The common folk love me for my kindness and generosity.",
          "3": "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
          "4": "I take great pains to always look my best and follow the latest fashions.",
          "5": "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
          "6": "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
          "7": "My favor, once lost, is lost forever.",
          "8": "If you do me an injury, I will crush you, ruin your name, and salt your fields."
        }
      }
    ]
  }
  expect(dataParsers.characteristicFromBackground('Artist')).toEqual(expectedCharacteristic);
});

test('#equipmentFromBackground', () => {
  expect(dataParsers.equipmentFromBackground('Developer')).toBe("Keyboard, mouse, computer");
});
