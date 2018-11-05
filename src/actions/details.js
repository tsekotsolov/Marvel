import {
  GET_DETAILS,
  CLEAR_DETAILS,
  DETAILS_OFFSET,
  CLEAR_DETAILS_OFFSET
} from "./types";
import requester from "../utils/requester";

export const getDetails = action => dispatch => {
  requester.fetchDetailCharacter(action.id, action.offset).then(response => {
    dispatch({
      type: GET_DETAILS,
      payload: response.data.results
    });
  });
};

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS
  };
};

export const detailsOffset = () => {
  return {
    type: DETAILS_OFFSET
  };
};

export const clearDetailsOffset = () => {
  return {
    type: CLEAR_DETAILS_OFFSET
  };
};
