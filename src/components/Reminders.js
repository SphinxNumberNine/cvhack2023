import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Link from "@mui/material/Link";

function Reminders(props) {
  const { reminders } = props;
  return (
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Reminder Type</TableCell>
          <TableCell align="right">Details</TableCell>
          <TableCell align="right">Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reminders.map((row) => (
          <TableRow
            key={row.name + row.schedule}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.type}</TableCell>
            <TableCell align="right">{row.detail}</TableCell>
            <TableCell align="right">
              <Link>{row.link}</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

Reminders.propTypes = {
  post: PropTypes.shape({
    detail: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reminders;
