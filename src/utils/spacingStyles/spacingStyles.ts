import { css, CSSProp } from 'styled-components';
import { ISpacingProps, spacingValue } from 'types/spacing.types';

import spacing from 'utils/spacing';

const getSpacing = (value: spacingValue) => {
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return spacing(value);

  return null;
};

const defaultSpacingValue = '1em';

export const spacingStyles = (props: ISpacingProps): CSSProp => css`
  ${props.m &&
  css`
    margin: ${getSpacing(props.m) ?? defaultSpacingValue};
  `}

  ${props.my &&
  css`
    margin-top: ${getSpacing(props.my) ?? defaultSpacingValue};
    margin-bottom: ${getSpacing(props.my) ?? defaultSpacingValue};
  `}

  ${props.mx &&
  css`
    margin-right: ${getSpacing(props.mx) ?? defaultSpacingValue};
    margin-left: ${getSpacing(props.mx) ?? defaultSpacingValue};
  `}

  ${props.mt &&
  css`
    margin-top: ${getSpacing(props.mt) ?? defaultSpacingValue};
  `}

  ${props.mr &&
  css`
    margin-right: ${getSpacing(props.mr) ?? defaultSpacingValue};
  `}

  ${props.mb &&
  css`
    margin-bottom: ${getSpacing(props.mb) ?? defaultSpacingValue};
  `}

  ${props.ml &&
  css`
    margin-left: ${getSpacing(props.ml) ?? defaultSpacingValue};
  `}
`;
