import Table from "../components/Table";
import { render, screen } from "@testing-library/react";

const dummyData = [
  {
    firstName: "Dennis",
    lastName: "Reynolds",
    email: "dennis@paddys.com",
    age: 40,
    income: 30000,
  },
];

const expectedData = ["Dennis Reynolds", "40", "dennis@paddys.com", "$30000"];

const expectedTableNames = ["Name", "Age", "Email", "Income"];

describe("Table component", () => {
  it("has correct table headings", () => {
    render(<Table people={dummyData} />);

    const tableHeaders = screen.getAllByRole("columnheader");

    tableHeaders.forEach((header, index) => {
      expect(header).toHaveTextContent(expectedTableNames[index]);
    });
  });

  it("renders all person data correctly", () => {
    render(<Table people={dummyData} />);

    const tableCells = screen.getAllByRole("cell");

    tableCells.forEach((cell, index) => {
      expect(cell).toHaveTextContent(expectedData[index]);
    });
  });
});
