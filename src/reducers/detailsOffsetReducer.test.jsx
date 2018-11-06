import reducer from "./detailsOffsetReducer";
import * as actionTypes from "../actions/types";

describe("detailsOffsetReducer", () => {
  it("should return 40 if the type does match and initial state value is 20", () => {
    expect(reducer(20, { type: actionTypes.DETAILS_OFFSET })).toEqual(40);
  });

  it("should return 20 if the type does match and the initial state is UNDEFINED", () => {
    expect(reducer(undefined, { type: actionTypes.DETAILS_OFFSET })).toEqual(
      20
    );
  });
  it("should return 0 if the type does NOT match and the initial state is UNDEFINED", () => {
    expect(reducer(undefined, { type: actionTypes.UNKNOWN })).toEqual(0);
  });

  it("should return 0 if the type does NOT match and the initial state is UNDEFINED", () => {
    expect(reducer(100, { type: actionTypes.CLEAR_DETAILS_OFFSET })).toEqual(0);
  });
});
