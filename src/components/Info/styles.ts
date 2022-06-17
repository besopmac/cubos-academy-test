import styled from 'styled-components';

export const Box = styled.div`
  padding: 50px;
  display: flex;
  grid-area: info;
  color: var(--white);
  border-radius: 15px;
  flex-direction: column;
  justify-content: space-between;
  background: rgb(44, 44, 44);
  background: linear-gradient(
    135deg,
    rgba(33, 33, 33, 1) -50%,
    rgba(44, 44, 44, 1) 10%,
    rgba(205, 205, 205, 1) 200%
  );
`;

export const Title = styled.div`
  gap: 20px;
  display: grid;
  font-size: 1.4rem;
  align-items: center;
  grid-template-columns: 1fr auto;

  > svg {
    width: 90px;
    height: 90px;
  }

  h2 {
    line-height: 1.1;
    font-size: 2.45rem;
  }
`;

export const Sinopsys = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 10px;

    :after {
      left: 0;
      content: '';
      width: 100%;
      height: 3px;
      bottom: -5px;
      position: absolute;
      background: rgb(44, 44, 44);
      background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(205, 205, 205, 0) 100%
      );
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: normal;
    padding: 20px 0 20px 20px;
  }
`;

export const Information = styled.div`
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    position: relative;
    margin-bottom: 10px;

    :after {
      left: 0;
      content: '';
      width: 100%;
      height: 3px;
      bottom: -5px;
      position: absolute;
      background: rgb(44, 44, 44);
      background: linear-gradient(
        100deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(205, 205, 205, 0) 100%
      );
    }
  }
`;

export const Grid = styled.div`
  gap: 20px;
  display: grid;
  margin-top: 20px;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(3, 1fr);

  p {
    line-height: 1.2;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.05rem;

    > small {
      display: block;
      font-size: 1rem;
      font-weight: 200;
      margin-bottom: 3px;
      letter-spacing: normal;
    }
  }
`;

export const Badges = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 20px;
`;

export const Item = styled.li`
  padding: 0 25px;
  line-height: 2.5;
  font-size: 0.9rem;
  color: var(--black);
  border-radius: 30px;
  background-color: var(--white);

  + li {
    margin-left: 15px;
  }
`;
