import styled, { css } from 'styled-components';

import { colorVariant } from 'types/common.types';
import { ISpacingProps } from 'types/spacing.types';
import { typographyAlign } from 'types/typography.types';

import spacingStyles from 'utils/spacingStyles';
import matchColoursWithTheme from 'utils/matchColoursWithTheme';

interface ITypographyCommonStylesProps extends ISpacingProps {
  align: typographyAlign;
  color: colorVariant;
  noWrap: boolean;
}

const typographyCommonStyles = css<ITypographyCommonStylesProps>`
  ${spacingStyles};

  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme, color }) => matchColoursWithTheme(theme, color)};

  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `}

  ${({ noWrap }) =>
    noWrap &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

export const Headline1 = styled.h1`
  ${typographyCommonStyles};
  font-size: 1.125rem;
`;

export const Body1 = styled.p`
  ${typographyCommonStyles};
  font-weight: 500;
`;

export const Body2 = styled.p`
  ${typographyCommonStyles};
  font-size: 0.875rem;
`;

export const Body3 = styled.p`
  ${typographyCommonStyles};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ButtonText = styled.p`
  ${typographyCommonStyles};
  letter-spacing: 0.02em;
`;

export const Caption1 = styled.span`
  ${typographyCommonStyles};
  font-size: 0.75rem;
  line-height: 1.6666666666;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.625rem;
    line-height: 1.6;
  }
`;

export const Caption2 = styled.span`
  ${typographyCommonStyles};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.6666666666;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.625rem;
    line-height: 1.6;
  }
`;

export const Caption3 = styled.span`
  ${typographyCommonStyles};
  font-size: 0.75rem;
  text-decoration-line: underline;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.625rem;
  }
`;
