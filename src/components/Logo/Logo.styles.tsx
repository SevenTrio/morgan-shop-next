import styled from 'styled-components';

import spacingStyles from 'utils/spacingStyles';

import LogoIcon from 'icons/logo.svg';

export const StyledLogo = styled.div`
  ${spacingStyles};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 48px;
    height: 48px;
  }
`;

export const StyledLogoIcon = styled(LogoIcon)`
  width: 36px;
  height: 36px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 28px;
    height: 28px;
  }
`;
