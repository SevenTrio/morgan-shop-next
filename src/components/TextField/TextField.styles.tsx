import styled, { css } from 'styled-components';

import { ISpacingProps } from 'types/spacing.types';

import spacingStyles from 'utils/spacingStyles';

import EyeOnIcon from 'icons/ic_eye_on.svg';
import EyeOffIcon from 'icons/ic_eye_off.svg';

interface IStyledTextFieldProps extends ISpacingProps {
  withHelperText: boolean;
  isPasswordField: boolean;
}

interface IStyledInputProps {
  error: boolean;
  isPasswordField: boolean;
}

export const StyledTextField = styled.div<IStyledTextFieldProps>`
  ${spacingStyles};

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 24px;
  }

  ${({ withHelperText }) =>
    withHelperText &&
    css`
      margin-bottom: 12px;

      @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        margin-bottom: 8px;
      }
    `}
`;

export const StyledHints = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<IStyledInputProps>`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.palette.common.darkGray};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.default};

  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.palette.text.hint};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0 8px;
    font-size: 0.75rem;
  }

  ${({ isPasswordField }) =>
    isPasswordField &&
    css`
      padding-right: 48px;
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.error.main};
    `}
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
`;

export const StyledEyeOnIcon = styled(EyeOnIcon)`
  width: 24px;
  height: 24px;

  path {
    stroke: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export const StyledEyeOffIcon = styled(EyeOffIcon)`
  width: 24px;
  height: 24px;

  path {
    stroke: ${({ theme }) => theme.palette.text.secondary};
  }
`;
