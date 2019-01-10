import React from 'react';
import { Header, Image, Grid, Container, Button } from 'semantic-ui-react';
 
class EventDetails extends React.Component {
  state = { event: 
    {id: 1, host: "Midnight Tyrannosaurus", image_url: "https://nightout.s3.amazonaws.com/media/posters/53148/medium-f06b089f1db1cf56.jpg?1546886793", event_date: "Tues Jan 15 2019", description: "This is a dude who makes music in his mom's basement while high and eating capt crunch. Drop E and enjoy.Hailing from New York City, and having only been in the scene for less than two years. Midnight Tyrannosaurus has quickly gained attention and support from some of the bigger artists in the underground industry with his unique powerful growl baselines, and heart melting sub-bass. Be on the lookout for this guy stopping in SLC on April 24th!", dress_code: "Clothing optional", },
  };

  render() {
    const { event } = this.state;
    return(
      <Grid >
        <Grid.Column width={6}>
          <Image size="large" rounded centered src={event.image_url} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Container>
            <Header as='h1'>{event.host}</Header>
            {event.event_date}
            <Header as='h3'>{event.description}</Header>
            <Button.Group centered size='massive'>
              <Button color='blue' inverted>Dress Code</Button>
              <Button color='blue' inverted>VIP Tables</Button>
              <Button color='blue' inverted>Tickets</Button>
            </Button.Group>
          </Container>
        </Grid.Column>
      </Grid>
    )
  }
} 

export default EventDetails;