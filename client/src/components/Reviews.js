import React from 'react';
import Iframe from 'react-iframe'
import { ComponentContainer, StyledHeader, Line } from '../styles/generalitems';

const Reviews = () => (
  <ComponentContainer style = {{paddingBottom: '900px'}}>
    <Line />
    <Iframe url = 'https://gmb.reviewsmaker.com/widget/widget.php?pid=ChIJsUt4_gT1UocROEceDYRK0_U'
      width="1400px"
      height="1000px"
    />
  </ComponentContainer>
)

export default Reviews;