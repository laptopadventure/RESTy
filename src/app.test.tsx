import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./app";
import { act } from "react-dom/test-utils";

  // .getBy -> returns element OR throws error if not found
  // .queryBy -> returns the first element, or null
  // .findBy -> returns a promise, waits up to 1000ms, and then does getBy

  // getAllBy -> Array or throw error if none
  // queryAllBy -> Array or empty array if non
  // findAllBy -> Promise, then getAllBy

  // https://testing-library.com/docs/queries/about
  // byRole
  // ByLabelText - inputs, etc
  // ByPlaceholderText -> input
  // etc
  // ByText -> Literal displayed text
  // ByTestId -> Looks for data-testid things in your code.

describe("App", () => {
  it("has correct results display when submitting a form", async () => {
    //setup
    render(<App />)
    const formInputElement = screen.getByTestId("form-input")
    const formButtonElement = screen.getByRole("button", {name: "GO!"})
    
    //test
    await act( async () => {
      fireEvent.change(formInputElement, {target: {value: 'http://localhost:3001/'}})
      fireEvent.click(formButtonElement);
      //give some time for fetch to fail
      await new Promise(resolve => setTimeout(resolve, 50))
    })
    //should have showed up, with a specific result
    const resultsElement = screen.getByText("\"Network request failed\"")
    //expect
    expect(resultsElement).toBeInTheDocument()
  })
})
export {}
