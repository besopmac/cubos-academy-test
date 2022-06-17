import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --gray: #CDCDCD;
    --black: #2C2C2C;
    --white: #FFFFFF;    
    --shadow: rgba(0,0,0,0.15);
    --transition: all 0.2s cubic-bezier(.43,.41,.22,.91)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    height: 100vh;
    line-height: 1.5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.02em;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
  max-width: 1280px;

  @media screen and (max-width: 960px) {
    padding: 30px;
  }
`;

export const Grid = styled.main`
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 35%;
  grid-template-areas:
    'info info flyer'
    'video video video';
`;
