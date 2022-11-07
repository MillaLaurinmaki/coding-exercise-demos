import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export default function PriceNameTable(props) {
  const { register, handleSubmit } = useForm();
  const [selectedFruit, setSelectedFruit] = React.useState([]);

  const onSubmit = (data) => {
    console.log("Received on submit:", data);
  };

  function checkFruit(fruit) {
    if (selectedFruit.find((f) => fruit.name === f.name)) {
      setSelectedFruit(selectedFruit.filter((f) => f.name !== fruit.name));
    } else {
      setSelectedFruit([...selectedFruit, fruit]);
    }
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

      { selectedFruit.length > 0 && 
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" sx={{mt: 5}}>Add meal</Typography>
          <div>
            <select {...register("mealType")}>
              <option>Aamupala</option>
              <option>Lounas</option>
              <option>Illallinen</option>
            </select>
            <ul>
              {selectedFruit.map((fruit) => {
                return <li key={fruit.name}>{fruit.name} <input {...register(`selectedItem_${fruit.name}`)} placeholder="Quantity"></input></li>;
              })}
            </ul>
            <input type="submit" value="Add meal"/>
          </div>

        </form>
      }
    </>
  );
}
