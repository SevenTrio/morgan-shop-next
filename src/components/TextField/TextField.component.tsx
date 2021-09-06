import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';

import { ISpacingProps } from 'types/spacing.types';

import separateStyles from 'utils/separateStyles';

import Typography from 'components/Typography';

import {
  StyledTextField,
  StyledHints,
  StyledInputWrapper,
  StyledInput,
  ShowPasswordButton,
  StyledEyeOnIcon,
  StyledEyeOffIcon,
} from './TextField.styles';

export interface ITextFieldProps
  extends ISpacingProps,
    InputHTMLAttributes<HTMLInputElement> {
  /**
   * The id of the input element.
   * Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string;
  /**
   * The label content.
   */
  label?: ReactNode;
  /**
   * The variant to use.
   */
  action?: ReactNode;
  /**
   * The helper text content.
   */
  helperText?: ReactNode;
  /**
   * If true, the label will be displayed in an error state.
   */
  error?: boolean;
}

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  (
    {
      id,
      label,
      action,
      helperText,
      error = false,
      type = 'text',
      ...restProps
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPasswordField = type === 'password';

    const [wrapperStyles, inputProps] = separateStyles(restProps);

    const handleShowPassword = () => {
      setShowPassword(true);
    };

    const handleHidePassword = () => {
      setShowPassword(false);
    };

    return (
      <StyledTextField
        withHelperText={!!helperText}
        isPasswordField={isPasswordField}
        {...wrapperStyles}
      >
        <StyledHints>
          {label ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Typography component="label" variant="body2" htmlFor={id}>
              {label}
            </Typography>
          ) : null}

          {action}
        </StyledHints>

        <StyledInputWrapper>
          <StyledInput
            id={id}
            ref={ref}
            type={isPasswordField && !showPassword ? 'password' : 'text'}
            error={error}
            isPasswordField={isPasswordField}
            {...inputProps}
          />

          {isPasswordField && (
            <ShowPasswordButton>
              {showPassword ? (
                <StyledEyeOnIcon onClick={handleHidePassword} />
              ) : (
                <StyledEyeOffIcon onClick={handleShowPassword} />
              )}
            </ShowPasswordButton>
          )}
        </StyledInputWrapper>

        {helperText ? (
          <Typography
            variant="caption1"
            color={error ? 'error' : 'textSecondary'}
          >
            {helperText}
          </Typography>
        ) : null}
      </StyledTextField>
    );
  },
);
