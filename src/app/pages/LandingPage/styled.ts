import styled from 'styled-components';
import img from './../../../images/landing-main-lg.png';

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'main main main'
    'content content content'
    'footer footer footer';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'main'
      'content'
      'footer';
  }
  color: white;
`;

export const Main = styled.main`
  background: #1f2128;
  background-image: url(${img});
  background-size: cover;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  @media (max-width: 768px) {
    min-height: 20vh;
  }
  @media (min-width: 768px) {
    min-height: 50vh;
  }
`;

export const ContentBox = styled.div`
  grid-area: content;
  width: 80vw;
  display: grid;
  gap: 0.25rem;
  justify-items: center;
  grid-template-columns: 1fr;
  margin: 0 auto;

  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export const Content1 = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;

export const Content2 = styled(Content1)``;
export const Content3 = styled(Content1)``;
export const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

// Div that centers the SearchBar vertically, but to the left of the screen
export const SearchCenterer = styled.div`
  color: red;
  display: flex;
  height: 80%;
  align-items: center;
  padding-left: 15vw;
`;
