// MOVIES REDUCER
import { NEW_MOVIE,
         NEW_MOVIE_ERROR,
         FETCH_MOVIE,
         FETCH_MOVIE_ERROR
} from '../actions/newMovie';

const initialState = {
     fetching: false,
     done: false,
     movies: [],
     error: {},
     movie: {}
};

export default (state =initialState, action) => {
    switch(action.type){
        case NEW_MOVIE:
          return {
            ...state,
            fetching: true,
            movies: action.payload,
            done: true,
        };
        case NEW_MOVIE_ERROR:
        return {
            ...state,
            error: action.payload,
            fetching: false,
            done: false
        };
        // FETCH MOVIE
        case FETCH_MOVIE:
        return {
          ...state,
          movie: action.payload.movie,
      };
      case FETCH_MOVIE_ERROR:
      return {
          ...state,
      };
       default:
         return state;
    }
} 