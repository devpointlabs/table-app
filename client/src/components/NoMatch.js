import React from 'react';
import { Link, } from 'react-router-dom';
import {StyledHeader, } from '../styles/Styles'
import { Container, } from 'semantic-ui-react';

const NoMatch = () => (
  <Container style={{marginTop: '175px', marginBottom: '100px'}}>
  <StyledHeader fSize='large' textAlign="center">
    Page not found return
    <Link to="/"> Home</Link>
  </StyledHeader>
  </Container>
)

export default NoMatch;
