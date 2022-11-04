import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

export default function PriceNameTable(props) {
  const [selectedFruit, setSelectedFruit] = React.useState([]);

  function checkFruit(fruit) {
    if (selectedFruit.find((f) => fruit.name === f.name)) {
      setSelectedFruit(selectedFruit.filter((f) => f.name !== fruit.name));
    } else {
      setSelectedFruit([...selectedFruit, fruit]);
    }
    console.log(selectedFruit);
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Table></Table>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={() => {
                      checkFruit(row);
                    }}
                    color="primary"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <p>
        <ul>
          {selectedFruit.map((fruit) => {
            return <li>{fruit.name}</li>;
          })}
        </ul>
      </p>
    </>
  );
}
