import React from 'react';
import { Header, } from 'semantic-ui-react';
import ComingArtists from './ComingArtists';
import rave from './rave.jpg';
import styled from 'styled-components';
import WhatDo1 from './WhatDo1';

const Home = () => (
  <>
    <HeroImage>
      <Img src={rave}/>
    </HeroImage>
    <WhatDo1/>
    <ComingArtists />
  </>
)

const Img = styled.img`
  width: 100%
`

const HeroImage = styled.div`
  background-color: black;
`

export default Home;