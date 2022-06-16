import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 80px auto 0;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  line-height: 2;
  font-size: 1.1rem;
  border-radius: 50%;
  color: var(--black);
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;
  background-color: var(--white);
  box-shadow: 0 2px 25px 5px var(--shadow);

  + li {
    margin-left: 20px;
  }

  &.active {
    color: var(--white);
    background-color: var(--black);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 25px 0 var(--shadow);
  }
`;
