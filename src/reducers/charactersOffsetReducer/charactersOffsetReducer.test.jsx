import reducer from "./charactersOffsetReducer";
import * as actionTypes from "../../actions/types";

describe("charactersOffsetReducer", () => {
  it("should return 40 if the type does match and initial state value is 20", () => {
    expect(reducer(20, { type: actionTypes.CHARACTER_OFFSET })).toEqual(40);
  });

  it("should return 20 if the type does match and the initial state is UNDEFINED", () => {
    expect(reducer(undefined, { type: actionTypes.CHARACTER_OFFSET })).toEqual(
      20
    );
  });
  it("should return 0 if the type does NOT match and the initial state is UNDEFINED", () => {
    expect(reducer(undefined, { type: actionTypes.UNKNOWN })).toEqual(0);
  });
});
