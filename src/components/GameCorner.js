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

function GameCorner(props) {
  const { games } = props;
  return (
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Player Name</TableCell>
          <TableCell align="right">Game</TableCell>
          <TableCell align="right">Game Link</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {games.map((row) => (
          <TableRow
            key={row.name + row.schedule}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.game}</TableCell>
            <TableCell align="right">
              <Link>{row.link}</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

GameCorner.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    game: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCorner;
