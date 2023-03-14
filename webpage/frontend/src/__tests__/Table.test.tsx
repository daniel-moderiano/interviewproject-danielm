import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { store } from "../store";
import { mockPeopleData } from "../mocks/handlers";
import Table from "../components/Table";

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

    // It should be sufficient to look for any of the API response data to check for success
    const tableCells = await screen.findByText(mockPeopleData[0].email);

    expect(tableCells).toBeInTheDocument();
  });

  it("formats income to correct format", async () => {
    setup();

    const income = await screen.findByText("$30,000");

    expect(income).toBeInTheDocument();
  });
});
