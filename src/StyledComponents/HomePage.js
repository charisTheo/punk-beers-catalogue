import styled from 'styled-components';

// import Color from "./../Util/Color";

export const BeersList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > li {
    margin: 15px 10px;
  }

  @media (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 959px) {

    > li {
      width: 22vw;
      margin: 10px 15px;
    }
  }
`;
