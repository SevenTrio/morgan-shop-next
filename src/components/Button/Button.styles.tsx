import styled, { css } from 'styled-components';

import { ISpacingProps } from 'types/spacing.types';

import spacingStyles from 'utils/spacingStyles';

interface IStyledButtonProps extends ISpacingProps {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  ${spacingStyles};

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? `100%` : `auto`)};
  height: 48px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  background-color: transparent;
  transition: background-color 0.2s linear;
  cursor: pointer;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 36px;
    padding: 0 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.lightGray};
  }

  &:active {
    background-color: ${({ theme }) => theme.palette.common.gray};
  }

  ${({ variant }) =>
    variant === `secondary` &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.palette.primary.main};

      &:hover {
        background-color: ${({ theme }) => theme.palette.primary.light};
      }

      &:active {
        background-color: ${({ theme }) => theme.palette.common.darkGray};
      }
    `}
`;
