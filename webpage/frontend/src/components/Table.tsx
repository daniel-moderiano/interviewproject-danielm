import MaterialTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Person } from "../types";

type TableProps = {
  people: Person[];
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d6d6d6",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Table = ({ people }: TableProps) => {
  return (
    <TableContainer
      sx={{
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "6px",
        width: "100%",
        maxHeight: "611.5px",
      }}
    >
      <MaterialTable stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Age</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Income</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <StyledTableRow key={person.email}>
              <StyledTableCell>
                {person.first_name} {person.last_name}
              </StyledTableCell>
              <StyledTableCell align="left">{person.age}</StyledTableCell>
              <StyledTableCell align="left">{person.email}</StyledTableCell>
              <StyledTableCell align="left">${person.income}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
