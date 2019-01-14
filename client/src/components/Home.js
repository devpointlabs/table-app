import React from 'react';
import ComingArtists from './ComingArtists';
import hero from '../images/Hero Images/Sky_SLC_Landing.JPG';
import styled from 'styled-components';
// import WhatDo1 from './WhatDo1';
import SampleMap from './SampleMap';
import ContactUs from './ContactUs';

const Home = () => (
  <>
    <HeroImage>
      <Img src={hero}/>
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