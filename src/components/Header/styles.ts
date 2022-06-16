import styled from 'styled-components';
import logo from './../../assets/images/logo.png';

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(150px - 50px);
  background-color: var(--black);
`;

export const HeaderLogo = styled.div`
  width: 412px;
  height: 60px;
  margin: 30px auto;
  display: inline-block;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
`;
