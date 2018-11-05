import { ADD_REMOVE_FAVOURITES } from "./types";

const addRemoveFavourites = id => {
  return {
    type: ADD_REMOVE_FAVOURITES,
    payload: id
  };
};

export default addRemoveFavourites;
