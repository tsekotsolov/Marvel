import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "./Button";
import sinon from "sinon";

configure({ adapter: new Adapter() });

describe("<Button />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button text="test" />);
  });

  it("should have text prop", () => {
    expect(wrapper).toHaveProperty("text");
  });

  // it("displays text correctly", () => {
  //   let text = wrapper.find("button").text();
  //   expect(text).toEqual("test ");
  // });

  it("calls a function on click", () => {
    const spy = sinon.spy();

    wrapper = mount(<Button text="test" action={spy} />);
    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(spy.calledOnce).toBe(true);
  });

  it("renders correctly", () => {
    wrapper = render(
      <Button
        text="test"
        className="test"
        onClick={() => {}}
        data-name="test"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
