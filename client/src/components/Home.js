import React from 'react';
import { Header, } from 'semantic-ui-react';
import ComingArtists from './ComingArtists';
import WhatDo1 from './WhatDo1'

const Home = () => (
  <>
    <Header as="h3" textAlign="center">Table App</Header>

    <WhatDo1/>
    <ComingArtists />
  </>
)

export default Home;
