import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Grid, Image, Header, Divider } from 'semantic-ui-react';
import '../styles/comingArtist.css';

class UserProfile extends React.Component {

  render() {
    const { user } = this.props.auth;
    return(
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={6} textAlign="center">
            <Header>Name</Header>
            {user.first_name} {user.last_name} <sub>name will go here</sub>
          </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column width={6} textAlign="center">
            <Header> Email </Header>
            {user.email}
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">
            <Header>Profile Pic</Header>
            <Image src={user.image}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const ConnectedUserProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <UserProfile { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedUserProfile;