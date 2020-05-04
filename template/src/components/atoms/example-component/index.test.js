import React from "react";
import { render } from "@testing-library/react";
import ExampleComponent from ".";

test("Render component successfully", () => {
  const { getByText } = render(<ExampleComponent />);
  const linkElement = getByText(/Ckl boilerplate is up and running/i);
  expect(linkElement).toBeInTheDocument();
});
