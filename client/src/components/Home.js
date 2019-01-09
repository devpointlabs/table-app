import React from 'react';
import { Header, } from 'semantic-ui-react';
import ComingArtists from './ComingArtists';
import rave from './rave.jpg'
import styled from 'styled-components';

const Home = () => (
  <div>
    <HeroImage>
      <Img src={rave}/>
    </HeroImage>
    <Header as="h3" textAlign="center">Table App</Header>
    <ComingArtists />
  </div>
)

const Img = styled.img`
  width: 100%
`

const HeroImage = styled.div`
  background-color: black;
`

export default Home;
