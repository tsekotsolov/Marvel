import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./Card";
import CardFooter from "./CardFooter";

configure({ adapter: new Adapter() });

describe("<CardFooter />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card name path thumbnail />);
  });

  // it("should have <CardFooter /> if there is name prop> ", () => {
  //   expect(wrapper.find(CardFooter)).toHaveLength(0);
  // });

  // it("should have one <p> tag if there is name prop> ", () => {
  //   expect(wrapper.find("p")).toHaveLength(1);
  // });

  // it("should have one <p> tag if there is title prop> ", () => {
  //   wrapper.setProps({ title: true, name: false });
  //   expect(wrapper.find("p")).toHaveLength(1);
  // });
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
