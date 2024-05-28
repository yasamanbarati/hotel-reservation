import { Container, Grid, Typography, styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableBox = styled(Table)(({theme})=>({
  "& th":{
    borderRight: `1px solid ${theme.palette.info.main}!important`,
    textAlign: 'center',
  },
  "& td":{
    borderRight: `1px solid ${theme.palette.info.main}!important`,
    textAlign: 'center',
  },
}))
export const ReserveHistory = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: { xs: "30px", md: "50px" } }}>
      <Typography component="h2" variant="h2" textAlign="center" mb={3}>
        Reservation History
      </Typography>

      <TableContainer component={Paper}>
        <TableBox sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">number</TableCell>
              <TableCell align="left">room name</TableCell>
              <TableCell align="justify">start date</TableCell>
              <TableCell align="justify">end date</TableCell>
              <TableCell align="justify">price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">Standard Room</TableCell>
              <TableCell align="justify">2024-01-15</TableCell>
              <TableCell align="justify">2024-01-18</TableCell>
              <TableCell align="justify">$300</TableCell>
              <TableCell align="right">edit</TableCell>
              <TableCell align="right">DELETE</TableCell>
            </TableRow>
          </TableBody>
        </TableBox>
      </TableContainer>
    </Container>
  );
};
