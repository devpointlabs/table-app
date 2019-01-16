import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Image, Grid, } from 'semantic-ui-react';
import { UserCard, Wrapper, Line, DashContent, } from '../styles/userdashstyle';
import { HeaderRow, GridText} from '../styles/ticketingstyle';

class UserDash extends React.Component {
  render() {
    const { user } = this.props.auth;
    return (
      <Wrapper>
        <UserCard>
          <Image src = 'https://pixel.nymag.com/imgs/daily/selectall/2017/01/09/09-steve-jobs-iphone.w700.h700.jpg' style = {{borderRadius: '100%'}}/>
          <h3>{user.email}</h3>
        </UserCard>
        <Line vertical/>
        <DashContent>
          <h3>TICKETS</h3>
          <Grid.Column width = {8}>
            <Grid style = {{paddingTop: '20px', width: '80%', margin: 'auto'}}>
              <HeaderRow>
                <Grid.Column mobile={4} computer={4}>
                  <GridText gray>
                    TICKET
                  </GridText>
                </Grid.Column>
                <Grid.Column mobile={4} computer={4}>
                  <GridText gray>
                    DATE
                  </GridText>
                </Grid.Column>
                <Grid.Column mobile={4} computer={4}>
                  <GridText gray>
                    QTY
                  </GridText>
                </Grid.Column>
                <Grid.Column mobile={4} computer={4}>
                  <GridText  gray>
                    PRICE
                  </GridText>
                </Grid.Column>
              </HeaderRow>
              <Grid.Row>
                <Grid.Column mobile={4} computer={4}>DJ RAZZ M'TAZZ<br />Pre-Sale Gen.ADM</Grid.Column>
                <Grid.Column mobile={4} computer={4}>9.5.19</Grid.Column>
                <Grid.Column mobile={4} computer={4}>2</Grid.Column>
                <Grid.Column mobile={4} computer={4}>$80</Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={4} computer={4}>DJ RAZZ M'TAZZ<br />Pre-Sale Gen.ADM</Grid.Column>
                <Grid.Column mobile={4} computer={4}>9.5.19</Grid.Column>
                <Grid.Column mobile={4} computer={4}>2</Grid.Column>
                <Grid.Column mobile={4} computer={4}>$80</Grid.Column>
              </Grid.Row>
              map through purchased tickets here
            </Grid>
          </Grid.Column>
          <Line />
        </DashContent>
      </Wrapper>
    )
  }
}

const ConnectedUserDash = (props) => (
  <AuthConsumer>
    { auth => 
      <UserDash { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedUserDash;