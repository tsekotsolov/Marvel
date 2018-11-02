import {
  GET_CHARACTERS,
  CHARACTER_OFFSET
} from './types'
import requester from '../utils/requester'

export const getCharacters = (action) => (dispatch) => {
  requester.fetchAllCharacters(action.offset).then((response) => {
    dispatch({
      type: GET_CHARACTERS,
      payload: response.data.results
    })
  })
}

export const charactersOffset = () => {
  return {
    type: CHARACTER_OFFSET
  }
}