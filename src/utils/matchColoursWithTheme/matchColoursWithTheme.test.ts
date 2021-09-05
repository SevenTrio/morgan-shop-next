import { theme } from 'styles/theme';
import { matchColoursWithTheme } from './matchColoursWithTheme';

const { primary, secondary, text, divider, error, common } = theme.palette;

describe(`matchColoursWithTheme function`, () => {
  test(`should return default color`, () => {
    expect(matchColoursWithTheme(theme, null as any)).toEqual(primary.main);
  });
  test(`should return primary color`, () => {
    expect(matchColoursWithTheme(theme, `primary`)).toEqual(primary.main);
  });
  test(`should return secondary color`, () => {
    expect(matchColoursWithTheme(theme, `secondary`)).toEqual(secondary.main);
  });
  test(`should return text primary color`, () => {
    expect(matchColoursWithTheme(theme, `textPrimary`)).toEqual(text.primary);
  });
  test(`should return text secondary color`, () => {
    expect(matchColoursWithTheme(theme, `textSecondary`)).toEqual(
      text.secondary,
    );
  });
  test(`should return divider color`, () => {
    expect(matchColoursWithTheme(theme, `divider`)).toEqual(divider);
  });
  test(`should return error color`, () => {
    expect(matchColoursWithTheme(theme, `error`)).toEqual(error.main);
  });
  test(`should return white color`, () => {
    expect(matchColoursWithTheme(theme, `white`)).toEqual(common.white);
  });
});
