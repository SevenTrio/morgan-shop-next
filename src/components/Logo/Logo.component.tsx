import { forwardRef, HTMLAttributes } from 'react';
import { ISpacingProps } from 'types/spacing.types';

import { StyledLogo, StyledLogoIcon } from './Logo.styles';

interface ILogoProps extends ISpacingProps, HTMLAttributes<HTMLDivElement> {
  /**
   * The component used for the root node.
   */
  component?: 'div' | 'a';
}

export const Logo = forwardRef<HTMLDivElement, ILogoProps>(
  ({ component = `div`, ...restProps }, ref) => (
    <StyledLogo as={component} ref={ref} {...restProps}>
      <StyledLogoIcon />
    </StyledLogo>
  ),
);

Logo.displayName = `Logo`;
