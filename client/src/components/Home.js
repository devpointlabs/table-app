import React from 'react';
import ComingArtists from './ComingArtists';
import rave from './rave.jpg';
import styled from 'styled-components';
// import WhatDo1 from './WhatDo1';
import SampleMap from './SampleMap';
import ContactUs from './ContactUs';

const Home = () => (
  <>
    <HeroImage>
      <Img src={rave}/>
    </HeroImage>
    {/* <WhatDo1/> */}
    <ComingArtists />
    <ContactUs />
    <SampleMap />
  </>
)

const Img = styled.img`
  width: 100%
`

const HeroImage = styled.div`
  background-color: black;
`

export default Home;