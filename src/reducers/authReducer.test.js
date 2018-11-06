import authReducer from "./authReducer";
import * as actionTypes from "../actions/types";

describe("auth reducer", () => {
  it("should return the initial state if the type does not match", () => {
    expect(authReducer(undefined, { type: "UNKNOWN" })).toEqual(false);
  });

  it("should return FALSE if the type does match", () => {
    expect(authReducer(true, { type: actionTypes.AUTHENTICATE })).toEqual(
      false
    );
  });

  it("should return TRUE if the type does match", () => {
    expect(authReducer(false, { type: actionTypes.AUTHENTICATE })).toEqual(
      true
    );
  });
});
