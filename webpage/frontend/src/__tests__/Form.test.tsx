import Form from "../components/Form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form component", () => {
  it("should accept inputs", async () => {
    render(<Form />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const ageInput = screen.getByLabelText(/age/i);
    const incomeInput = screen.getByLabelText(/income/i);

    await userEvent.type(firstNameInput, "John");
    await userEvent.type(lastNameInput, "Doe");
    await userEvent.type(emailInput, "john@gmail.com");
    await userEvent.type(ageInput, "20");
    await userEvent.type(incomeInput, "10000");

    expect(firstNameInput).toHaveValue("John");
    expect(lastNameInput).toHaveValue("Doe");
    expect(emailInput).toHaveValue("john@gmail.com");
    expect(ageInput).toHaveValue(20);
    expect(incomeInput).toHaveValue(10000);
  });
});
