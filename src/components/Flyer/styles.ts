import styled from 'styled-components';

export const Box = styled.div`
  grid-area: flyer;
  border-radius: 15px;

  > img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
