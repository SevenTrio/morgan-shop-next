import 'styled-components';

interface IPalette {
  common: {
    black: string;
    darkGray: string;
    gray: string;
    lightGray: string;
    white: string;
    red: string;
  };
  primary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  error: {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
  };
  divider: string;
  background: {
    default: string;
    productCard: string;
    menu: string;
  };
}

interface IBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

interface IZIndexes {
  basket: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: IBreakpoints;
    palette: IPalette;
    shadows: string[];
    spacing: (value: number) => string;
    zIndexes: IZIndexes;
  }
}
