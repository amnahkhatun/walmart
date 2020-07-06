import React from "react";
import { shallow, mount, render } from "enzyme";
import Login from "../login/Login";
import "../../setupTest";

// describe what we are testing
describe("Login Component", () => {
  // make our assertion and what we expect to happen
  it("should render without throwing an error", () => {
    expect(
      shallow(<Login />)
        .find("form")
        .exists()
    ).toBe(true);
  });
  it("renders a email input", () => {
    expect(shallow(<Login />).find("#email").length).toEqual(1);
  });
});
