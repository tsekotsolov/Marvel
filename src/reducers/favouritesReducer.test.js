import reducer from "./favouritesReducer";
import * as actionTypes from "../actions/types";

describe("favouritesReducer", () => {
  it("should remove the value from the state if the value already exists and the action type matches", () => {
    expect(
      reducer([1, 2], { type: actionTypes.ADD_REMOVE_FAVOURITES, payload: 2 })
    ).toEqual([1]);
  });

  it("should add the value to the state if it does not exist and the action type matches", () => {
    expect(
      reducer([1, 2], { type: actionTypes.ADD_REMOVE_FAVOURITES, payload: 4 })
    ).toEqual([1, 2, 4]);
  });

  it("should return the inital state if the action type DOES NOT match", () => {
    expect(reducer([1, 2], { type: actionTypes.UNKNOWN, payload: 8 })).toEqual([
      1,
      2
    ]);
  });

  it("should return the default inital state if undefined is passed and the action type does NOT match", () => {
    expect(
      reducer(undefined, { type: actionTypes.UNKNOWN, payload: 100 })
    ).toEqual([]);
  });

  it("should add the payload to initial state if undefined is passed and the action type matches", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.ADD_REMOVE_FAVOURITES,
        payload: 3
      })
    ).toEqual([3]);
  });

  it("should return the initial state if payload is undefined, and the action type matches", () => {
    expect(
      reducer([1, 2], {
        type: actionTypes.ADD_REMOVE_FAVOURITES,
        payload: undefined
      })
    ).toEqual([1, 2]);
  });
});
