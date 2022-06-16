import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  display: grid;
  border-radius: 15px;
  transition: all 0.3s ease-in;
  grid-template-columns: 22.5% 1fr;
  box-shadow: 0 2px 25px -5px var(--shadow);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 2px 25px 0 var(--shadow);
  }

  + div {
    margin-top: 60px;
  }
`;

export const Image = styled.div`
  > img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 15px 0 0 15px;
  }
`;

export const Info = styled.div`
  gap: 15px;
  display: grid;
  padding: 50px;
  font-size: 1.3rem;
  color: var(--black);
  grid-template-rows: repeat(4, min-content);
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.4rem;
  align-items: center;

  > svg {
    margin-right: 5px;
  }
`;

export const Badges = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 20px;

  li {
    padding: 0 30px;
    line-height: 2.5;
    font-size: 0.9rem;
    color: var(--white);
    border-radius: 30px;
    background-color: var(--black);

    + li {
      margin-left: 20px;
    }
  }
`;
