import React from 'react';
import ComingArtists from './ComingArtists';
import hero from '../images/Hero Images/Sky_SLC_Landing.JPG';
// import WhatDo1 from './WhatDo1';
import Map from './Map';
import ContactUs from './ContactUs';
import TableService from './TableService';
import { Image } from 'semantic-ui-react';

const Home = () => (
  <>
    <Image bordered fluid src={hero}/>
    {/* <WhatDo1/> */}
    <ComingArtists />
    <TableService />
    <ContactUs />
    <Map />
  </>
)

export default Home;