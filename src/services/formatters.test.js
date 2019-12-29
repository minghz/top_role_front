import * as formatters from './formatters'

test('#humanizeCamelCase', () => {
  expect(formatters.humanizeCamelCase('athletics')).toBe('Athletics');
  expect(formatters.humanizeCamelCase('thisStringIsGood')).toBe('This String Is Good');
});

test('#camelize', () => {
  expect(formatters.camelize('EquipmentClass name')).toBe('equipmentClassName');
  expect(formatters.camelize('Equipment className')).toBe('equipmentClassName');
  expect(formatters.camelize('equipment class name')).toBe('equipmentClassName');
  expect(formatters.camelize('Equipment Class Name')).toBe('equipmentClassName');
});
