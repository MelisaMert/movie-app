import React, {Component} from 'react';
import ActorList  from '../ActorList';


class HomePage extends Component {
  state =  {
    actors: [{
        name: "Marlon Brando",
        description: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem",
        photo: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_UY317_CR97,0,214,317_AL_.jpg" },
        {
        name: "Merly Streep",
        description: "Considered by many critics to be the greatest living actress, Meryl Streep has been nominated for the Academy Award an astonishing 21 times, and has won it three times.",
        photo: "https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg"
        },
        {
        name: "Robert De Niro",
        description: "One of the greatest actors of all time, Robert De Niro was born on August 17, 1943 in Manhattan, New York City, to artists Virginia (Admiral) and Robert De Niro Sr.",
        photo: "https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY209_CR9,0,140,209_AL_.jpg"
        }
      ]
    };
  render() {
      return (
       <div>
           <div>
             <ActorList actors = {this.state.actors}/>
           </div>
       </div>
      );
  }
}

export default HomePage;