import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      City: 1143155,
      product: "suresh",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      Deadline: "1 March",
      Budget: "10cr",
      status: "Approved",
    },
    {
      City: 2235235,
      product: "ramesh",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "15 March",
      Deadline: "1 March",
      Budget: "12cr",
      status: "Pending",
    },
    {
      City: 2342353,
      product: "bhavesh",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      Deadline: "21 March",
      Budget: "13cr",
      status: "Pending",
    },
    {
      City: 2357741,
      product: "jignesh",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      Deadline: "19 March",
      Budget: "45cr",
      status: "Approved",
    },
    {
      City: 2342355,
      product: "raja",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "18 March",
      Deadline: "1 March",
      Budget: "56cr",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">City</TableCell>
            <TableCell className="tableCell">Lead Name</TableCell>
            {/* <TableCell className="tableCell"></TableCell> */}
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Deadline</TableCell>
            <TableCell className="tableCell">Budget</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.City}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              {/* <TableCell className="tableCell">{row.customer}</TableCell> */}
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.Deadline}</TableCell>
              <TableCell className="tableCell">{row.Budget}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
