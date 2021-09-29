import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })
  it("paging Dr. Bart",()=>{
    const element = screen.getByDisplayValue("Dr. Bart");

    expect(element).toBeInTheDocument();
  })
  /* it("paging Dr. Bart",()=>{
    const element = screen.getByText("Dr. Bart");

    expect(element).toBeInTheDocument();
  }) */
  it("Card Viewer?", () => {
    const element = screen.getByText("Card Viewer");

    expect(element).toBeInTheDocument();
  })
  it("has the Control Panel when the application loads", () => {
    const element = screen.getByText("Control Panel");

    expect(element).toBeInTheDocument();
  })

  it("does not show the Answer when we first load", () => {
    const element = screen.queryByTestId("answer-label");

    expect(element).not.toBeInTheDocument();
  });

  it("does show the Answer when we click the reveal button", async () => {
    const button = screen.getByTestId("reveal-answer-button");
    button.click();
    const element = await screen.findByTestId("answer-label");
    expect(element).toBeInTheDocument();
  })
})
