import React from 'react';
import { Redirect, } from 'react-router-dom';
import { StyledSegment, StyledHeader, StyledButton } from '../styles/Styles'


const PaymentSuccess = ({ location: { state, }, }) => {
  if(state && state.transactionId)
    return(
      <StyledSegment basic textAlign='center'>
        <StyledHeader as='h1' color='green'>Thank You For Your Purchase!</StyledHeader>
        <p>You have been successfully charged: ${state.amount}</p>
        <p>Your Transcation Id is: {state.transactionId}</p>
        <StyledButton href='/'>Start Over</StyledButton>
      </StyledSegment>
    )
  else
    return(<Redirect to='/' />);
}

export default PaymentSuccess;
