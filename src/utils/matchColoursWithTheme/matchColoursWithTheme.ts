import { DefaultTheme } from 'styled-components';
import { colorVariant } from 'types/common.types';

export const matchColoursWithTheme = (
  theme: DefaultTheme,
  color: colorVariant,
): string => {
  switch (color) {
    case `primary`:
      return theme.palette.primary.main;
    case `secondary`:
      return theme.palette.secondary.main;
    case `textPrimary`:
      return theme.palette.text.primary;
    case `textSecondary`:
      return theme.palette.text.secondary;
    case `divider`:
      return theme.palette.divider;
    case `error`:
      return theme.palette.error.main;
    case `white`:
      return theme.palette.common.white;

    default:
      return theme.palette.primary.main;
  }
};
