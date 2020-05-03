import React from 'react';
import { Card, Icon, Image, Grid , Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const dbUrl = `mongodb://${process.env.DB_HOST}`;


 const extra = movie => {
  return (
    <div className = "ui two buttons">
      <Button animated as = {Link} to= {`/movie/${movie._id}`}  >
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
      <Icon name = "edit"/>
      </Button.Content>
      </Button>
      <Button animated='vertical'>
      <Button.Content visible>Delete</Button.Content>
      <Button.Content hidden>
      <Icon name='trash' color="red"/>
      </Button.Content>
      </Button>
    </div>
  );
 } 

 const MovieCard = ({ movie }) => (
    <Grid.Column>
    <Card
     image={movie.cover}
     header={movie.title}
     extra={extra(movie)}
   />
   </Grid.Column>
 )

export default MovieCard;