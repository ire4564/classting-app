import { render, screen } from '@testing-library/react';
import Test from "../pages/Test";

const add = require("../pages/Test");

it("add correctly", () => {
    expect(add(3,5)).toBe(8);
})