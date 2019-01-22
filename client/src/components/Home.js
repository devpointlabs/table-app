import React from 'react';
import ComingArtists from './ComingArtists';
// import WhatDo1 from './WhatDo1';
import Map from './Map';
import ContactUs from './ContactUs';
import TableService from './TableService';
import HeroImages from './HeroImages';

const Home = () => (
  <>
    <HeroImages />
    {/* <WhatDo1/> */}
    <ComingArtists />
    <TableService />
    <ContactUs />
    <Map />
  </>
)

export default Home;