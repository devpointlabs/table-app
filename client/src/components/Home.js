import React from 'react';
import { Header, } from 'semantic-ui-react';
import ComingArtists from './ComingArtists';


const Home = () => (
  <div>
    <Header as="h3" textAlign="center">Table App</Header>
    <ComingArtists />
  </div>
)

export default Home;
