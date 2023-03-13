import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/Form.css";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "6rem",
    alignSelf: "flex-end",
  },
  width: "100%",
  alignSelf: "flex-start",
}));

const Form = (props: React.FormHTMLAttributes<HTMLFormElement>) => {
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
        <TextField label="First Name" variant="outlined" required fullWidth />
        <TextField label="Last Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Age" variant="outlined" type="number" required />
        <TextField label="Income" variant="outlined" type="number" required />
        <StyledButton type="submit" variant="contained">
          Submit
        </StyledButton>
      </form>
    </div>
  );
};

export default Form;
