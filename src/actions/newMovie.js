// NEW MOVIE ACTION
import axios from 'axios';
import { API_BASE}  from '../config/env'

export const NEW_MOVIE = "NEW_MOVIE";
export const NEW_MOVIE_ERROR = "NEW_MOVIE_ERROR";

export const FETCH_MOVIE = "FETCH_MOVIE";
export const FETCH_MOVIE_ERROR = "FETCH_MOVIE_ERROR";

export function onNewMovieSubmit({title , cover}){
  return dispatch => {
    axios.post(`${API_BASE}/movies`, {title, cover}
    ).then(obj=> {
        console.log(obj.data);
    })
    .catch(error => dispatch({
        type: NEW_MOVIE_ERROR,
        payload: error
    }))
  }
}

export function fetchMovie(id){
  return dispatch => {
      dispatch({
        type: "FETCH_MOVIE",
        payload: axios.get(`${API_BASE}/movies/${id}`).
        then(result => result.data)
      })
  }
}