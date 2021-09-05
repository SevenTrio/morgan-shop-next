import { cssUnit } from 'types/common.types';

export type spacingVariant = 'm' | 'my' | 'mx' | 'mt' | 'mr' | 'mb' | 'ml';

export type spacingValue = boolean | number | cssUnit | 'auto' | 'inherit';

export interface ISpacingProps {
  m?: spacingValue;
  my?: spacingValue;
  mx?: spacingValue;
  mt?: spacingValue;
  mr?: spacingValue;
  mb?: spacingValue;
  ml?: spacingValue;
}
