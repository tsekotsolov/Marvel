import { combineReducers } from "redux";
import isAuth from "./authReducer/authReducer";
import favArray from "./favouritesReducer/favouritesReducer";
import characters from "./charactersReducer/charactersReducer";
import details from "./detailsReducer/detailsReducer";
import characterOffset from "./charactersOffsetReducer/charactersOffsetReducer";
import detailsOffset from "./detailsOffsetReducer/detailsOffsetReducer";

let rootReducer = combineReducers({
  isAuth,
  favArray,
  characters,
  characterOffset,
  detailsOffset,
  details
});

export default rootReducer;
