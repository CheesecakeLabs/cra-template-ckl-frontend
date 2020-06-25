import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "styles/base.scss";

import { ExampleComponent } from "components/atoms";

ReactDOM.render(
  <StrictMode>
    <ExampleComponent />
  </StrictMode>,
  document.getElementById("root")
);
