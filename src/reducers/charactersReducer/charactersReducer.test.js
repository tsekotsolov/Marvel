import reducer from "./charactersReducer";
import * as actionTypes from "../../actions/types";

describe("charactersReducer", () => {
  it("should add the values from the payload to the state if the action type matches", () => {
    expect(
      reducer([1, 2], { type: actionTypes.GET_CHARACTERS, payload: [3, 4] })
    ).toEqual([1, 2, 3, 4]);
  });

  it("should return the inital state if the action type DOES NOT match", () => {
    expect(
      reducer([1, 2], { type: actionTypes.UNKNOWN, payload: [3, 4] })
    ).toEqual([1, 2]);
  });

  it("should add the values from the payload to an empty array if the state is undefined and the action type matches", () => {
    expect(
      reducer(undefined, { type: actionTypes.GET_CHARACTERS, payload: [3, 4] })
    ).toEqual([3, 4]);
  });
});
