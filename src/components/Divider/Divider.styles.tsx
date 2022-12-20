import styled, { css } from 'styled-components';

import { ISpacingProps } from 'types/spacing.types';

import spacingStyles from 'utils/spacingStyles';

interface IStyledDividerProps extends ISpacingProps {
  text?: string;
}

export const StyledDivider = styled.div<IStyledDividerProps>`
  ${spacingStyles};

  position: relative;
  height: 1px;
  width: 100%;
  margin: 0;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  ${({ text }) =>
    text &&
    css`
      &:after {
        content: '${text}';
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        padding: 0 8px;
        transform: translate(-50%, -50%);
        z-index: 1;
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${({ theme }) => theme.palette.divider};
        background-color: ${({ theme }) => theme.palette.background.default};

        @media screen and (max-width: ${({ theme }) =>
            theme.breakpoints.sm}px) {
          padding: 0 4px;
          font-size: 0.625rem;
        }
      }
    `}
`;
