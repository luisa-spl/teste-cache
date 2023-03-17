import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;