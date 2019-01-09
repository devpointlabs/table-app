import React from 'react';
import { Card, Image, Header, Divider } from 'semantic-ui-react';
import '../styles/comingArtist.css';

class ComingArtists extends React.Component {
  state = { artists: [
    {id: 1, name: "name1", image: "https://nightout.s3.amazonaws.com/media/posters/53148/medium-f06b089f1db1cf56.jpg?1546886793"},
    {id: 2, name: "name2", image: "https://nightout.s3.amazonaws.com/media/posters/51313/medium-6a93586c65233c02.jpg?1541612333"},
    {id: 3, name: "name3", image: "https://nightout.s3.amazonaws.com/media/posters/52756/medium-4a8354aea91d32c3.jpg?1545238001"}
  ],
  };

  render() {
    const { artists } = this.state;
    return(
      <div class="body">
        <Header as="h1" inverted textAlign="center">Coming Artists</Header>
        <Divider inverted />
        <Card.Group stackable centered itemsPerRow={3}>
          { artists.map( artist =>
            <Card key={artist.id} style={{ maxWidth: '300px' }}>
              <Image src={artist.image} />
            </Card>
          )}
        </Card.Group>
      </div>
    )
  }
}
export default ComingArtists;