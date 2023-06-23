import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

render(<Button title="test-btn" class="" colour="#000000" />);

const button = screen.getByTitle("test-btn");

describe("Button Component", () => {
  test("Should change the background colour", () => {
    fireEvent.click(button);
    expect(document.body.style.backgroundColor).toEqual("rgb(0, 0, 0)");
  });
});
