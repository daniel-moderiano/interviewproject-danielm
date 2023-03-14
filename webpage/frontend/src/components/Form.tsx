import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/Form.css";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Person } from "../types";

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "6rem",
    alignSelf: "flex-end",
  },
  width: "100%",
  alignSelf: "flex-start",
}));

const Form = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
  const [formData, setFormData] = React.useState<Person>({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    income: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      <form className="form" {...props}>
        <TextField
          label="First Name"
          variant="outlined"
          required
          fullWidth
          value={formData.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          required
          value={formData.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          required
          value={formData.age}
          name="age"
          onChange={handleChange}
        />
        <TextField
          label="Income"
          variant="outlined"
          type="number"
          required
          value={formData.income}
          name="income"
          onChange={handleChange}
        />
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </form>
    </div>
  );
};

export default Form;
