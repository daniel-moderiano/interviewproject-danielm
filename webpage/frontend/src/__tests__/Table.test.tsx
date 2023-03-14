import { Provider } from "react-redux";
import Table from "../components/Table";
import { render, screen } from "@testing-library/react";
import { store } from "../store";
import { mockPeopleData } from "../mocks/handlers";

const expectedData = [
  `${mockPeopleData[0].firstName} ${mockPeopleData[0].lastName}`,
  mockPeopleData[0].age.toString(),
  mockPeopleData[0].email,
  `$${mockPeopleData[0].income.toString()}`,
];

const expectedTableNames = ["Name", "Age", "Email", "Income"];

const setup = () =>
  render(
    <Provider store={store}>
      <Table />
    </Provider>
  );

describe("Table component", () => {
  it("has correct table headings", async () => {
    setup();

    // the "findAll" async selector must be used since we are dealing with async API calls
    const tableHeaders = await screen.findAllByRole("columnheader");

    tableHeaders.forEach((header, index) => {
      expect(header).toHaveTextContent(expectedTableNames[index]);
    });
  });

  it("handles good API response", async () => {
    setup();

    // the "findAll" async selector must be used since we are dealing with async API calls
    const tableCells = await screen.findAllByRole("cell");

    tableCells.forEach((cell, index) => {
      expect(cell).toHaveTextContent(expectedData[index]);
    });
  });
});
