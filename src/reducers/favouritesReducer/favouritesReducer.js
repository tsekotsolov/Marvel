import { ADD_REMOVE_FAVOURITES } from "../../actions/types";

const favouritesReducer = (favArray = [], action) => {
  switch (action.type) {
    case ADD_REMOVE_FAVOURITES:
      const index = favArray.indexOf(action.payload);
      if (index < 0 && action.payload) {
        return [...favArray, action.payload];
      } else if (!action.payload) {
        return favArray;
      } else {
        return [...favArray.slice(0, index), ...favArray.slice(index + 1)];
      }
    default:
      return favArray;
  }
};
export default favouritesReducer;
