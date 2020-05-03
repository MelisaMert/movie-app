import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import {Grid} from 'semantic-ui-react';
import {HashLoader} from 'react-spinners';

// Stateless Component
// Gelen movies propuna göre MoviesList şekille
const MoviesList = ({ movies }) => {
    const emptyMessage = (
        <p>There are no movies yet. </p>
    );
   // <div key={movie._id}>{movie.title}</div>
   // Hatanın Alınmadığı Durumlarda servisdeki Filmler Listelenecek
    const moviesList = (
        <>
        <div>
          {/* <HashLoader
             color={'#123abc'}
             loading={true}
          /> */}
            {
                movies && movies.movieList  ? 
                <Grid stackable columns={3}>
                 {movies.movieList.map(movie =>
                   <MovieCard key={movie._id} movie={movie}></MovieCard>)}
                </Grid>
                : 'Movies Not Found'
            }
        </div>
      </>
    );

    return (
        <div>
            {movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
};

// backend service'den gelen movie objesi ve movies objesi içerisindeki movie listi geçirilecek
// bu nedenle yapılandırma gerekiyor

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired,
    }).isRequired
};

export default MoviesList;