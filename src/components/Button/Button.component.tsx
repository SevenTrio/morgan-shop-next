import { ButtonHTMLAttributes, forwardRef } from 'react';

import { ISpacingProps } from 'types/spacing.types';

import Typography from 'components/Typography';

import { StyledButton } from './Button.styles';

export interface IButtonProps
  extends ISpacingProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant to use.
   */
  variant?: 'primary' | 'secondary';
  /**
   * The component used for the root node.
   */
  component?: 'button' | 'a' | 'span';
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      component = 'button',
      variant = 'primary',
      fullWidth = false,
      ...restProps
    },
    ref,
  ) => {
    const textColor = variant === `primary` ? `textPrimary` : `white`;

    return (
      <StyledButton
        ref={ref}
        as={component}
        variant={variant}
        fullWidth={fullWidth}
        {...restProps}
      >
        <Typography variant="buttonText" color={textColor}>
          {children}
        </Typography>
      </StyledButton>
    );
  },
);
