import MaterialTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Person } from "../types";

type TableProps = {
  people: Person[];
};

const Table = ({ people }: TableProps) => {
  return (
    <TableContainer>
      <MaterialTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Income</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow
              key={person.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {person.first_name} {person.last_name}
              </TableCell>
              <TableCell align="right">{person.age}</TableCell>
              <TableCell align="right">{person.email}</TableCell>
              <TableCell align="right">${person.income}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
