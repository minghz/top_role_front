import * as hpCalculator from './hpCalculator'

test('averageHp level 1 without constitution modifier', () => {
  var level = 1
  var conMod = 0
  var hitDice = 6

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(6);
});

test('averageHp level 1 with constitution modifier ', () => {
  var level = 1
  var conMod = 1
  var hitDice = 6

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(7);
});

test('averageHp level 2 without constitution modifier', () => {
  var level = 2
  var conMod = 0
  var hitDice = 6

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(9);
});

test('averageHp level 2 with constitution modifier', () => {
  var level = 2
  var conMod = 1
  var hitDice = 6

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(11);
});

test('averageHp level 3 without constitution modifier, and hd 1d12', () => {
  var level = 3
  var conMod = 0
  var hitDice = 12

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(25);
});

test('averageHp level 5 with high cons modifier, and hd 1d12', () => {
  var level = 5
  var conMod = 3
  var hitDice = 12

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(53);
});

test('averageHp level 15 with low cons modifier, and hd 1d8', () => {
  var level = 15
  var conMod = 1
  var hitDice = 8

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(86);
});

test('averageHp level 15 with average cons modifier, and hd 1d8', () => {
  var level = 15
  var conMod = 2
  var hitDice = 8

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(101);
});

test('averageHp level 15 with high cons modifier, and hd 1d8', () => {
  var level = 15
  var conMod = 5
  var hitDice = 8

  expect(hpCalculator.averageHp(level, conMod, hitDice)).toBe(146);
});
