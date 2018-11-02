import { GET_DETAILS, CLEAR_DETAILS } from "../actions/types";

const datailsReducer = (details = [], action) => {
  switch (action.type) {
    case GET_DETAILS:
      return [...details, ...action.payload];

    case CLEAR_DETAILS:
      return [...details.slice(0, 0)];

    default:
      return details;
  }
};
export default datailsReducer;
