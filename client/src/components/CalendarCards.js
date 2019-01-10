import React from 'react';
import { Image, Header, Button, Grid } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class CalendarCards extends React.Component {
  render() {
    const { event } = this.props;
    return(
      <Grid centered>
        <Grid.Column textAlign='center' style={{ maxWidth: '200px',}}>
            <Grid.Row><Image src={event.image_url} /></Grid.Row>
            <Grid.Row>
              <b>{event.host}</b>
            </Grid.Row>
            <Grid.Row>
              {event.event_date}
            </Grid.Row>
            <Grid.Row>
              <Button as={Link} to={`/events/${event.id}`} fluid inverted color='blue'>Tables</Button>
              <Button as={Link} to={`/events/${event.id}`} fluid color='blue'>Tickets</Button>
            </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}

export default CalendarCards;