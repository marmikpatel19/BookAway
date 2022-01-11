import React from "react";
import "../../App.css";
import Footer from "../Footer";
import Navbar from "../navbar";
import "./Pricing.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createData(golden, linden, marsh, bluberryblossom, raspberryblossom) {
  return { golden, linden, marsh, bluberryblossom, raspberryblossom };
}

const rows = [createData("$12", "$15", "$11", "$12", "$13")];

function Pricing() {
  return (
    <>
      <Navbar />
      <h1 className="pricing-heading">PRICING</h1>
      <h1>Try some of our delicious honey!</h1>
      <Table
        sx={{ minWidth: 500, maxWidth: 900 }}
        size="medium"
        aria-label="a dense table"
        className="table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="header-cell">
              <b>Golden Honey</b>
            </TableCell>
            <TableCell>
              <b>Linden Honey</b>
            </TableCell>
            <TableCell>
              <b>Marsh Honey</b>
            </TableCell>
            <TableCell>
              <b>Blueberry Blossom Honey</b>
            </TableCell>
            <TableCell>
              <b>Raspberry Blossom Honey</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.golden}</TableCell>
              <TableCell>{row.linden}</TableCell>
              <TableCell>{row.marsh}</TableCell>
              <TableCell>{row.bluberryblossom}</TableCell>
              <TableCell>{row.raspberryblossom}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h3 id="honey-discription">
        Our 100% pure honey can be purchased at any of our{" "}
        <Link to="/beehives" id="beehives-link">
          beehives
        </Link>
      </h3>
      <Footer />
    </>
  );
}

export default Pricing;
