import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/Form.css";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

const StyledTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "576px",
  },
  width: "100%",
}));

const Form = () => {
  const matches = useMediaQuery("(min-width:576px)");

  return (
    <div className="formContainer">
      <Typography
        component="h2"
        sx={{
          paddingBottom: "2rem",
          fontSize: 28,
        }}
      >
        Add new person
      </Typography>
      <form className="form">
        <StyledTextField label="First Name" variant="outlined" required />
        <StyledTextField label="Last Name" variant="outlined" required />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <StyledTextField
          label="Age"
          variant="outlined"
          type="number"
          required
        />
        <StyledTextField
          label="Income"
          variant="outlined"
          type="number"
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: matches ? "5rem" : "100%",
            alignSelf: matches ? "flex-end" : "flex-start",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
