import * as formatters from './formatters'

test('#humanizeCamelCase', () => {
  expect(formatters.humanizeCamelCase('athletics')).toBe('Athletics');
  expect(formatters.humanizeCamelCase('thisStringIsGood')).toBe('This String Is Good');
});
