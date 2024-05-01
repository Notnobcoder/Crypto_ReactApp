import * as React from 'react';
import "./Coin.css"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Coin({ name, icon, price, percentage, symbol }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, }} aria-label="customized table">
        <TableHead sx={{ marginY: "10px" }}>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Icon</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Percentage</StyledTableCell>
            <StyledTableCell align="right">Symbol</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={name}>
            <StyledTableCell component="th" scope="row">
              {name}
            </StyledTableCell>
            <StyledTableCell align="right">
              <img src={icon} alt="" className='coinimage' />
            </StyledTableCell>
            <StyledTableCell align="right">{price}</StyledTableCell>
            <StyledTableCell align="right">{percentage}</StyledTableCell>
            <StyledTableCell align="right">{symbol}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
