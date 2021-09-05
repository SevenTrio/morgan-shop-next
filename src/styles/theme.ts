import { DefaultTheme } from 'styled-components';
import { lighten, darken } from 'polished';

import spacing from 'utils/spacing';
import colors from 'styles/colors';

export const theme: DefaultTheme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  palette: {
    common: {
      black: colors.black,
      darkGray: colors.darkGray,
      gray: colors.gray,
      lightGray: colors.lightGray,
      white: colors.white,
      red: colors.red,
    },
    primary: {
      light: `#424242`,
      main: colors.black,
      dark: darken(0.08, colors.black),
      contrastText: colors.white,
    },
    secondary: {
      light: lighten(0.08, colors.white),
      main: colors.white,
      dark: darken(0.08, colors.white),
      contrastText: colors.black,
    },
    error: {
      light: lighten(0.08, colors.red),
      main: colors.red,
      dark: darken(0.08, colors.red),
      contrastText: colors.white,
    },
    text: {
      primary: colors.black,
      secondary: colors.darkGray,
      disabled: colors.darkGray,
      hint: colors.darkGray,
    },
    divider: colors.gray,
    background: {
      default: colors.white,
      productCard: colors.lightGray,
      menu: colors.lightGray,
    },
  },
  shadows: [`1px 1px 10px rgba(0, 0, 0, 0.08)`],
  spacing,
  zIndexes: {
    basket: 100,
  },
};
