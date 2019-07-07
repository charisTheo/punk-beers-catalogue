import styled from "styled-components";

import Color from "./../Util/Color";

export const Card = styled.div`
  box-shadow: ${props => props.isExpanded ? 'none' : '0 3px 10px 0 rgba(0, 0, 0, 0.4)'};
  border-radius: 3px;
  text-align: left;
  padding: 10px 20px;
  background-color: ${Color.WHITE};
  width: 100%;
  max-width: ${props => props.isExpanded ? 'initial' : '310px'};
  max-height: ${props => props.isExpanded ? 'initial' : '625px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  
  @media (min-width: 767px) {
    flex-wrap: ${props => props.isExpanded ? 'wrap' : 'initial'};
    flex-direction: ${props => props.isExpanded ? 'row' : 'column'};
    justify-content: ${props => props.isExpanded ? 'left' : 'center'};
    align-items: ${props => props.isExpanded ? 'flex-start' : 'left'};
  }

  @media (min-width: 959px) {
    max-width: initial;
  }
`;

export const Title = styled.h2`
  color: ${Color.BLACK};
  order: 1;
  font-weight: 800;
  margin: 0.6rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  @media (min-width: 767px) {
    flex: ${props => props.isExpanded ? '1 1 100%' : 'initial'};
  }
`;
  
export const Image = styled.img`
  order: ${props => props.isExpanded ? 2 : 3};
  object-fit: contain;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 375px;
`;

export const Details = styled.div`
  order: ${props => props.isExpanded ? 3 : 2};

  @media (min-width: 767px) {
    ${props => props.isExpanded ? 'flex: 1 1 50%;' : '' }
  }
`;

export const Subtitle = styled.p`
  margin: 0.6rem 0;
  color: ${Color.BLACK};
  font-weight: 500;
`;
 
export const TagLine = styled.p`
  color: ${Color.GREY};
  margin: 0.6rem 0;
  font-style: italic;
  order: 4;
`;

export const Description = styled.p`
  margin: 0.6rem 0;
  color: ${Color.GREY};
  order: 5;
`;
