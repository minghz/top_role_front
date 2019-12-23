import * as helpers from './helpers'

test('#attributeNameFromType', () => {
  expect(helpers.attributeNameFromType('str')).toBe('Strength');
  expect(helpers.attributeNameFromType('dex')).toBe('Dexterity');
  expect(helpers.attributeNameFromType('con')).toBe('Constitution');
  expect(helpers.attributeNameFromType('int')).toBe('Inteligence');
  expect(helpers.attributeNameFromType('wis')).toBe('Wisdom');
  expect(helpers.attributeNameFromType('cha')).toBe('Charisma');
  expect(helpers.attributeNameFromType('err')).toBe('N/A');
});

test('#proficiencyBonusFromLevel', () => {
  expect(helpers.proficiencyBonusFromLevel(4)).toBe(2);
  expect(helpers.proficiencyBonusFromLevel(5)).toBe(3);
  expect(helpers.proficiencyBonusFromLevel(9)).toBe(4);
  expect(helpers.proficiencyBonusFromLevel(13)).toBe(5);
  expect(helpers.proficiencyBonusFromLevel(17)).toBe(6);
});

test('#attributeOfSkill', () => {
  expect(helpers.attributeOfSkill('athletics')).toBe('str');
  expect(helpers.attributeOfSkill('acrobatics')).toBe('dex');
  expect(helpers.attributeOfSkill('sleightOfHand')).toBe('dex');
  expect(helpers.attributeOfSkill('stealth')).toBe('dex');
  expect(helpers.attributeOfSkill('arcana')).toBe('int');
  expect(helpers.attributeOfSkill('history')).toBe('int');
  expect(helpers.attributeOfSkill('investigation')).toBe('int');
  expect(helpers.attributeOfSkill('nature')).toBe('int');
  expect(helpers.attributeOfSkill('religion')).toBe('int');
  expect(helpers.attributeOfSkill('animalHandling')).toBe('wis');
  expect(helpers.attributeOfSkill('insight')).toBe('wis');
  expect(helpers.attributeOfSkill('medicine')).toBe('wis');
  expect(helpers.attributeOfSkill('perception')).toBe('wis');
  expect(helpers.attributeOfSkill('survival')).toBe('wis');
  expect(helpers.attributeOfSkill('deception')).toBe('cha');
  expect(helpers.attributeOfSkill('intimidation')).toBe('cha');
  expect(helpers.attributeOfSkill('performance')).toBe('cha');
  expect(helpers.attributeOfSkill('persuasion')).toBe('cha');
})

test('#modifierFromAttribute', () => {
  expect(helpers.modifierFromAttribute(7)).toBe(-2);
  expect(helpers.modifierFromAttribute(8)).toBe(-1);
  expect(helpers.modifierFromAttribute(10)).toBe(0);
  expect(helpers.modifierFromAttribute(11)).toBe(0);
  expect(helpers.modifierFromAttribute(12)).toBe(1);
  expect(helpers.modifierFromAttribute(14)).toBe(2);
  expect(helpers.modifierFromAttribute(18)).toBe(4);
  expect(helpers.modifierFromAttribute(19)).toBe(4);
  expect(helpers.modifierFromAttribute(20)).toBe(5);
});

test('#modifiers', () => {
  var fakeBase = {
    "str": 11,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 15,
    "cha": 16
  }
  var fakeRacial = {
    "str": 0,
    "dex": 1,
    "con": 2,
    "int": 3,
    "wis": 4,
    "cha": 5
  }
  var expectedMods = {
    "str": 0,
    "dex": 1,
    "con": 2,
    "int": 3,
    "wis": 4,
    "cha": 5
  }

  expect(helpers.modifiers(fakeBase, fakeRacial)).toEqual(expectedMods);
});

test('#listNames', () => {
  var fakeData = [
    {"name": "Marley"},
    {"name": "Bob"}
  ]

  expect(helpers.listNames(fakeData).length).toBe(2);
  expect(helpers.listNames(fakeData)).toContain("Bob");
  expect(helpers.listNames(fakeData)).toContain("Marley");
})
