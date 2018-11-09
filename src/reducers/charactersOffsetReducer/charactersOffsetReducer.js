import { CHARACTER_OFFSET } from "../../actions/types";

const charactersOffsetReducer = (characterOffset = 0, action) => {
  switch (action.type) {
    case CHARACTER_OFFSET:
      return characterOffset + 20;

    default:
      return characterOffset;
  }
};
export default charactersOffsetReducer;
