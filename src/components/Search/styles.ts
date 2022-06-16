import styled from 'styled-components';

export const SearchInput = styled.div`
  margin-bottom: 80px;

  &.withIcon {
    position: relative;
  }

  .searchIcon {
    top: 50%;
    left: 36px;
    width: 36px;
    height: 36px;
    fill: var(--gray);
    position: absolute;
    transform: translateY(-50%);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 58px;
  cursor: pointer;
  font-size: 1.65rem;
  padding-left: 92px;
  color: var(--black);
  border-radius: 30px;
  transition: all 0.3s ease-in;
  border: 1px solid var(--white);
  box-shadow: 0 2px 25px -5px var(--shadow);

  &:focus,
  &:focus-visible {
    outline: none;
    border: 1px solid var(--white);
    box-shadow: 0 0 25px 0 var(--shadow);
  }

  ::placeholder {
    font-size: 1.5rem;
    color: var(--gray);
    font-weight: normal;
  }
`;
