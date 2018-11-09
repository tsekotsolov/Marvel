import { DETAILS_OFFSET, CLEAR_DETAILS_OFFSET } from "../../actions/types";

const detailsOffsetReducer = (detailsOffset = 0, action) => {
  switch (action.type) {
    case DETAILS_OFFSET:
      return detailsOffset + 20;

    case CLEAR_DETAILS_OFFSET:
      return 0;

    default:
      return detailsOffset;
  }
};
export default detailsOffsetReducer;
