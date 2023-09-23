import React from "react";
import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  test("renders the Footer component", () => {
    render(
      <Footer>
        <div>aaaaaa</div>
      </Footer>
    );
  });
});
