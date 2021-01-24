import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";

describe("test App", () => {
  it("renders without problems", () => {
    act(() => {
      ReactDOM.render(<App />, document.createElement("div"));
    });
  });
});
