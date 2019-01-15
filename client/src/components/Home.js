import React from 'react';
import ComingArtists from './ComingArtists';
import hero from '../images/Hero Images/Sky_SLC_Landing.JPG';
import styled from 'styled-components';
// import WhatDo1 from './WhatDo1';
import SampleMap from './SampleMap';
import ContactUs from './ContactUs';
import TableService from './TableService';
import { Image } from 'semantic-ui-react';

const Home = () => (
  <>
      <Image fluid src={hero}/>
    {/* <WhatDo1/> */}
    <ComingArtists />
    <TableService />
    <ContactUs />
    <SampleMap />
  </>
)

export default Home;