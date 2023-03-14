import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Person } from "../types";
import { useAddPersonMutation } from "../services/backendApi";
import "../styles/Form.css";

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "6rem",
    alignSelf: "flex-end",
  },
  width: "100%",
  alignSelf: "flex-start",
}));

const Form = () => {
  const [addPerson] = useAddPersonMutation();
  const [formData, setFormData] = React.useState<Person>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    income: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Call unwrap() to allow error catching at this point, or else the call will be treated as successful
      await addPerson(formData).unwrap();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        income: "",
      });
    } catch {
      console.error("An error occurred");
    }
  };

  return (
    <div className="formContainer">
      <Typography
        component="h2"
        sx={{
          fontSize: 26,
        }}
      >
        Add new person
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontStyle: "italic",
        }}
      >
        All fields marked an asterisk (*) are required
      </Typography>
      <form className="form" onSubmit={handleFormSubmit}>
        <TextField
          label="First Name"
          required
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
        />
        <TextField
          label="Last Name"
          required
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />
        <TextField
          label="Age"
          type="number"
          required
          value={formData.age}
          name="age"
          onChange={handleInputChange}
        />
        <TextField
          label="Income"
          type="number"
          required
          value={formData.income}
          name="income"
          onChange={handleInputChange}
        />
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </form>
    </div>
  );
};

export default Form;
