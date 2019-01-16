import styled from 'styled-components'
import tableServiceHero from '../images/Hero Images/table-service-hero.JPG'

export const HeroWrapper = styled.div`
  height: 960px;
  background-image: url(${tableServiceHero});
  text-align: center;
  border: 1px solid grey;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 60px;
  color: white;
  font-family: Biondi SemiBold;
`;

export const Container = styled.div`
  margin: auto;
`;

// padding-top: 430px;
