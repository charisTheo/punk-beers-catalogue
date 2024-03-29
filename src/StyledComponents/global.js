import styled from 'styled-components';

import Color from "./../Util/Color";

export const Layout = styled.main`
  padding: 20px 10px;
  margin: 0;
  width: 100vw;
  height: 100%; 
  color: ${Color.GREY};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  padding: 0 1em;
  
  @media (min-width: 959px) {
    text-align: left;
  }
`;

export const Button = styled.button`
  padding: 0.65em 1.2em;
  border: 2px solid ${Color.YELLOW};
  border-radius: 3px;
  background-color: ${Color.YELLOW};
  color: ${Color.GREY};
  font-size: 1em;
  margin: 1em;
  outline: none;
  transition: all 0.35s;

  &:hover, &:active {
    background-color: transparent;
  }
`;

export const NavToolBar = styled.nav`
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: ${Color.YELLOW};
  text-align: left;
`;
  
export const NavToolBarButton = styled.button`
  width: 100px;
  height: 100%;
  padding: 10px 20px;
  background-color: transparent;
  color: ${Color.YELLOW};
  text-align: left;
  border: none;
  outline: none;
  font-weight: 800;
  font-size: 1em;
`;

export const SortDropDown = styled.form`
  text-align: right;
  padding: 20px;

  select {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
    margin: 0 10px;
    padding: 4px;
  }
`;

export const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 10;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
    background-color: ${Color.YELLOW};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    transform: rotate(0deg);
    animation: animateLoader 1s infinite;
  }

  @keyframes animateLoader {
    50% {
      transform: rotateZ(360deg);
      width: 90px;
      height: 90px;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.4);
    }
  }
`;
