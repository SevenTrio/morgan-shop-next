import { spacing } from './spacing';

describe(`spacing function`, () => {
  test(`should return the correct value`, () => {
    expect(spacing(0)).toBe('0px');
    expect(spacing(1)).toBe('4px');
    expect(spacing(2)).toBe('8px');
  });
});
