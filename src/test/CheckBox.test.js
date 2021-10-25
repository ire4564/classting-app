import React from 'react';
import CheckBox from "../components/CheckBox";
import { render } from "@testing-library/react";

it("matches snapshot", () => {
    const utils = render(<CheckBox dataSet={["A", "B", "C", "D"]}/>)
    expect(utils.container).toMatchSnapshot();
});

it("shows the props correctly", () => {
    const utils = render(<CheckBox dataSet={["A", "B", "C", "D"]}/>)
    utils.getByText("A");
    utils.getByText("B");
    utils.getByText("C");
    utils.getByText("D");
})