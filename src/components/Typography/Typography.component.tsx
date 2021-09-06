import { forwardRef, HTMLAttributes } from 'react';

import { colorVariant } from 'types/common.types';
import { ISpacingProps } from 'types/spacing.types';
import {
  typographyAlign,
  typographyComponent,
  typographyVariant,
} from 'types/typography.types';

import {
  Headline1,
  Body1,
  Body2,
  Body3,
  ButtonText,
  Caption1,
  Caption2,
  Caption3,
} from './Typography.styles';

export interface ITypographyProps
  extends ISpacingProps,
    HTMLAttributes<HTMLParagraphElement> {
  /**
   * Set the text-align on the component.
   */
  align?: typographyAlign;
  /**
   * The color of the component.
   */
  color?: colorVariant;
  /**
   * The component used for the root node.
   */
  component?: typographyComponent;
  /**
   * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   */
  noWrap?: boolean;
  /**
   * The variant to use.
   */
  variant?: typographyVariant;
}

export const Typography = forwardRef<HTMLParagraphElement, ITypographyProps>(
  (
    {
      align = 'inherit',
      color = 'textPrimary',
      variant = 'body1',
      component,
      noWrap = false,
      children,
      ...restProps
    },
    ref,
  ) => {
    switch (variant) {
      case `h1`:
        return (
          <Headline1
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Headline1>
        );

      case `body1`:
        return (
          <Body1
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Body1>
        );

      case `body2`:
        return (
          <Body2
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Body2>
        );

      case `body3`:
        return (
          <Body3
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Body3>
        );

      case `buttonText`:
        return (
          <ButtonText
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </ButtonText>
        );

      case `caption1`:
        return (
          <Caption1
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Caption1>
        );

      case `caption2`:
        return (
          <Caption2
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Caption2>
        );

      case `caption3`:
        return (
          <Caption3
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Caption3>
        );

      default:
        return (
          <Body1
            ref={ref}
            as={component}
            align={align}
            color={color}
            noWrap={noWrap}
            {...restProps}
          >
            {children}
          </Body1>
        );
    }
  },
);
