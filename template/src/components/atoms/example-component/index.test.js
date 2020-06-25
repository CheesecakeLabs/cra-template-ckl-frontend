import React from "react";
import { render } from "@testing-library/react";
import ExampleComponent from ".";

test("Render component successfully", () => {
  const { getByText } = render(<ExampleComponent />);
  const linkElement = getByText(/CKL Create React App Template is ready/i);
  expect(linkElement).toBeInTheDocument();
});
