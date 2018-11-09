import { GET_CHARACTERS } from "../../actions/types";

const charactersReducer = (characters = [], action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return [...characters, ...action.payload];
    default:
      return characters;
  }
};
export default charactersReducer;
