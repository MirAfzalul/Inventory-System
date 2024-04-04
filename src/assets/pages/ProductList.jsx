
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

function createData(name, pieces, numFla, priceEach, totalPrice ) {
  return { name, pieces, numFla, priceEach, totalPrice };
}

const rows = [
  createData('BC 5000',158, 6.0, 24, 3792),
  createData('Tyson Round 2', 137, 9.0, 37, 5069),
  createData('Iron Mike', 62, 16.0, 24, 1488),
  createData('Raz', 30, 15, 67, 2010),
  createData('GeekBar', 56, 16.0, 49, 2744),
];
const ProductList = () => {
  return (
    <>
    <h3>Disposiable Vape List</h3>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name </StyledTableCell>
            <StyledTableCell align="center">Pieces</StyledTableCell>
            <StyledTableCell align="center">Number of Flavour</StyledTableCell>
            <StyledTableCell align="center">Price Each&nbsp;($)</StyledTableCell>
            <StyledTableCell align="center">Total Price&nbsp;($)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.pieces}</StyledTableCell>
              <StyledTableCell align="center">{row.numFla}</StyledTableCell>
              <StyledTableCell align="center">{row.priceEach}</StyledTableCell>
              <StyledTableCell align="conter">{row.totalPrice}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default ProductList