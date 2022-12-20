import React, { HTMLAttributes } from 'react';
import { ISpacingProps } from '../../types/spacing.types';

import { StyledDivider } from './Divider.styles';

export interface IDividerProps
  extends ISpacingProps,
    HTMLAttributes<HTMLDivElement> {
  /**
   * Divider text.
   */
  text?: string;
}

export const Divider: React.FC<IDividerProps> = ({
  text = ``,
  ...htmlProps
}) => {
  return <StyledDivider text={text} {...htmlProps} />;
};

Divider.displayName = `Divider`;
