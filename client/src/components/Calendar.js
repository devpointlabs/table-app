import React from 'react';
import { Card, Image, Header, Button } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

class Calendar extends React.Component {
  state = { events: [
    {id: 1, host: "Midnight Tyrannosaurus", image_url: "https://nightout.s3.amazonaws.com/media/posters/53148/medium-f06b089f1db1cf56.jpg?1546886793", event_date: "Tuesday, Feb 10th, 2019"},
    {id: 2, host: "Swamplex", image_url: "https://nightout.s3.amazonaws.com/media/posters/51313/medium-6a93586c65233c02.jpg?1541612333", event_date: "Wednesday, Feb 11th, 2019"},
    {id: 3, host: "Up in Smoke Tour", image_url: "https://nightout.s3.amazonaws.com/media/posters/52756/medium-4a8354aea91d32c3.jpg?1545238001", event_date: "Thursday, Feb 12th, 2019"}
  ],
  };

  render() {
    const { events } = this.state;
    return(
      <div>
        <Header as='h1' textAlign='center'>Calendar</Header>
        <Card.Group>
          { events.map( event =>
              <Card key={event.id} style={{ maxWidth: '150px' }}>
                <Image src={event.image_url} />
                <Card.Content>
                  <Card.Header as={Link} to={`/events/${event.id}`}>{event.host}</Card.Header>
                  {event.event_date}
                </Card.Content>
                <Card.Content extra>
                  <Button as={Link} to={`/events/${event.id}`} fluid inverted color='blue'>Tables</Button>
                  <Button as={Link} to={`/events/${event.id}`} fluid color='blue'>Tickets</Button>
                </Card.Content>
              </Card>
          )}
        </Card.Group>
      </div>
    )
  }
}

export default Calendar;