import reducer from "./detailsReducer";
import * as actionTypes from "../actions/types";

describe("detailsReducer", () => {
  it("should add the values from the payload to the state if the action type matches", () => {
    expect(
      reducer([1, 2], { type: actionTypes.GET_DETAILS, payload: [3, 4] })
    ).toEqual([1, 2, 3, 4]);
  });

  it("should return an empty array if the action type matches", () => {
    expect(reducer([1, 2], { type: actionTypes.CLEAR_DETAILS })).toEqual([]);
  });

  it("should return the inital state if the action type DOES NOT match", () => {
    expect(
      reducer([1, 2], { type: actionTypes.UNKNOWN, payload: [3, 4] })
    ).toEqual([1, 2]);
  });

  it("should return an empty array if the initial state is undefined and the action type DOES NOT match", () => {
    expect(
      reducer(undefined, { type: actionTypes.UNKNOWN, payload: [3, 4] })
    ).toEqual([]);
  });
});
