import styled from 'styled-components';
import VipTable from '../images/Hero Images/viptables.JPG'

export const HeroWrapper = styled.div`
  height: 960px;
  background-image: url(${VipTable});
  text-align: center;
  border: 1px solid grey;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;