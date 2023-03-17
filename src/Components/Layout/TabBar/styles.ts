import styled from 'styled-components';

export const LayoutTabBar = styled.div`
  grid-area: tabBar;

  @media only screen and (max-width: 430px) {
    width: 100%;
  }

  @media only screen and (min-width: 431px) {
    max-width: 240px;
  }
`;