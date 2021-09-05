import { CSSProperties } from 'react';
import { spacingVariant, ISpacingProps } from 'types/spacing.types';

interface IComponentStyles extends ISpacingProps {
  style?: CSSProperties;
  className?: string;
}

type separateStylesReturn<Props> = [
  componentStyles: IComponentStyles,
  componentProps: Omit<Props, 'style' | 'className' | spacingVariant>,
];

export const separateStyles = <Props extends IComponentStyles = any>({
  m,
  my,
  mx,
  mt,
  mr,
  mb,
  ml,
  style,
  className,
  ...componentProps
}: Props): separateStylesReturn<Props> => {
  const componentStyles = {
    m,
    my,
    mx,
    mt,
    mr,
    mb,
    ml,
    style,
    className,
  };

  return [componentStyles, componentProps];
};
