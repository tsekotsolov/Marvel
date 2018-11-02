import { combineReducers } from "redux";
import isAuth from "./authReducer";
import favArray from "./favouritesReducer";
import characters from "./charactersReducer";
import details from "./detailsReducer";
import characterOffset from "./charactersOffsetReducer";
import detailsOffset from "./detailsOffsetReducer";

let rootReducer = combineReducers({
  isAuth,
  favArray,
  characters,
  characterOffset,
  detailsOffset,
  details
});

export default rootReducer;
