import axios from 'axios'
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE
} from './constants'

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest())
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep')
      .then(response => {
        // response.data is the books
        const books = response.data.items
        dispatch(fetchBooksSuccess(books))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchBooksFailure(error.message))
      })
  }
}

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
}

export const fetchBooksSuccess = books => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books
  }
}

export const fetchBooksFailure = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
}
