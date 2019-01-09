import React from 'react';
import { Grid, Image, Header, Divider } from 'semantic-ui-react';
import '../styles/comingArtist.css';

class UserProfile extends React.Component {

  render() {
    const { user } = this.props.auth;
    return(
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header> {user.first_name} {user.last_name} </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default UserProfile;