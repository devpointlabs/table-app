import styled from 'styled-components';
import VipTable from '../images/Hero Images/viptables.JPG'
import { Button } from 'semantic-ui-react'

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

export const LayoutButton = styled(Button)`
  color: #b29d72 !important;
  border: 3px solid #000000 !important;
  border-radius: 0px !important;
  margin: 1 0px !important;
  font-family: ${props => props.defaultFont ? 'none' : 'copperplate !important'}
  background-color: #000000 !important;
  font-size: 25px !important;

  @keyframes glowing-border {
    from {
      border: 3px solid #000000 ;
    }
    
    to {
      outline: none;
      border: 3px solid cyan;
      box-shadow: 1px 1px 10px cyan;
    }
  }
  
  &:hover {
    animation-name: glowing-border;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transition: background 0.2s ease;
  }
`;