// MOVIES REDUCER
import { FETCH_MOVIES, FETCH_MOVIES_ERROR } from '../actions/movies';

const initialState = {
     fetching: false,
     movieList: [],
     error: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
          return {
            ...state,
            fetching: false,
            movieList: action.payload
        };
        case FETCH_MOVIES_ERROR:
        return {
            ...state,
            error: action.payload,
            fetching: false
        };
       default:
         return state;
    }
} 