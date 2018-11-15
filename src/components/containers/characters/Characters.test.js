import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Characters } from "./Characters";
import LoginForm from "../../forms/loginForm/LoginForm";

configure({ adapter: new Adapter() });

describe("<Characters />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Characters characters />);
  });

  it("should render <LoginForm /> when is NOT Authenticated", () => {
    wrapper.setProps({ isAuth: false });
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it("should NOT render <LoginForm /> when is Authenticated", () => {
    wrapper.setProps({
      isAuth: true,
      characters: [{ key: 1 }]
    });
    expect(wrapper.find(LoginForm)).toHaveLength(0);
  });
});
