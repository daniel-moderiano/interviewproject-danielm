import Form from "../components/Form";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../store";

const setup = () =>
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

describe("Form component", () => {
  it("should accept inputs", async () => {
    setup();

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

  it("calls API successfully on form submission", async () => {
    setup();

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const ageInput = screen.getByLabelText(/age/i);
    const incomeInput = screen.getByLabelText(/income/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(firstNameInput, "John");
    await userEvent.type(lastNameInput, "Doe");
    await userEvent.type(emailInput, "john@gmail.com");
    await userEvent.type(ageInput, "20");
    await userEvent.type(incomeInput, "10000");
    await userEvent.click(submitButton);

    // The form will reset on successful API POST request (i.e. no errors with request)
    // Must reselect input using async findBy function to ensure we get the post-API call state of the input
    const updatedInput = await screen.findByLabelText(/first name/i);
    expect(updatedInput).toHaveValue("");
  });
});
