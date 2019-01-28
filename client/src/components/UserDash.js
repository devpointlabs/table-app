import React from 'react';
import axios from 'axios';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Image, Grid, } from 'semantic-ui-react';
import { UserCard, Wrapper, Line, DashContent, } from '../styles/userdashstyle';
import { HeaderRow, GridText} from '../styles/ticketingstyle';
import defaultImage from '../images/default-profile.jpg';
import { format } from 'date-fns';

class UserDash extends React.Component {
  state = {
    tickets : [
      {},
    ]
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.auth.user.id}/my_ticket`)
    .then( res => {
      this.setState({ tickets: [...res.data] }, () => this.dateFormat());
    })
    .catch( err => {
      console.log(err);
    })
  }

  dateFormat = () => {
    this.state.tickets.map( t => (
      t.event_date = format(
        new Date(t.event_date),
        'MMM Do'
      ),
      this.setState({ event_date: t.event_date, },
      )
    ))
  }

  renderTickets () {
    const { tickets } = this.state;
    return (
      tickets.map( t => (
        <Grid.Row>
          <Grid.Column>{t.event_date}</Grid.Column>
          <Grid.Column>{t.host}</Grid.Column>
          <Grid.Column>{t.quantity}</Grid.Column>
        </Grid.Row>
      ))
    )
  }

  render() {
    const { user } = this.props.auth;
    return (
      <Wrapper>
        <UserCard>
          <Image src = {user.image || defaultImage} style = {{borderRadius: '10%'}}/>
          <h3>{user.first_name} {user.last_name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.date_of_birth}</h3>
          <h3>{user.gender}</h3>
          <h3>{user.city}</h3>
        </UserCard>
        <Line vertical/>
        <DashContent>
          <h3>PURCHASED TICKETS</h3>
          <Grid.Column width = {8}>
          <Grid widths = 'equal' columns = {3} style = {{paddingTop: '20px', width: '80%', margin: 'auto',}}>
              <HeaderRow>
                <Grid.Column >
                  <GridText gray>
                    DATE
                  </GridText>
                </Grid.Column>
                <Grid.Column >
                  <GridText gray>
                    EVENT
                  </GridText>
                </Grid.Column>
                <Grid.Column >
                  <GridText gray>
                    QTY
                  </GridText>
                </Grid.Column>
              </HeaderRow>
              { this.renderTickets() }
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