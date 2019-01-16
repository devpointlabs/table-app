import React, { Component, } from 'react';
import axios from "axios";
import braintree from 'braintree-web-drop-in';
import BraintreeDropin from 'braintree-dropin-react';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import { Redirect, } from 'react-router-dom';
import { Dimmer, Loader, Segment, } from 'semantic-ui-react';

class BraintreeDrop extends Component {
  state = { 
    loaded: false, 
    token: '',
    redirect: false,
    transactionId: '',
  };

  componentDidMount() {
    axios.get('/api/braintree_token')
      .then( res => {
        const { data: token, } = res;
        this.setState({ token, loaded: true });
      })
  }
  
  handlePaymentMethod = (payload) => {
    const { amount } = this.props;

    axios.post('/api/payment', { amount, ...payload, })
      .then( res => {
        const { data: transactionId, } = res;
        this.setState({ redirect: true, transactionId, });
      })
      .catch( res => {
        window.location.reload();
    });
  }

  render () {
    const { loaded, token, redirect, transactionId, } = this.state;

    if(redirect)
      return(
        <Redirect to={{
          pathname: '/payment_success',
          state: { amount: this.props.amount, transactionId }
        }}/>
      );
    if(loaded)
      return (
        <Segment basic textAlign='center'>
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
        </Segment>
      );
    else
      return(
        <Dimmer active>
          <Loader>Loading Payment Experience. Please Wait...</Loader>
        </Dimmer>
      )
  }
}

export default BraintreeDrop;
