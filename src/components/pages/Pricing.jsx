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

{
  /*First Table*/
}
function createData(golden, linden, marsh, bluberryblossom, raspberryblossom) {
  return { golden, linden, marsh, bluberryblossom, raspberryblossom };
}

const rows = [createData("$12", "$15", "$11", "$12", "$13")];

{
  /*Second Table*/
}
function createData2(tour, lincoln, calgary, burnaby, ottawa) {
  return { tour, lincoln, calgary, burnaby, ottawa };
}

const rows2 = [
  createData2(
    "Private Bee Tour (one hour, up to four people)",
    "$99",
    "$99",
    "$120",
    "$99"
  ),
  createData2(
    "School Group Tour (1.5 hours, up to 15 people)",
    "$10/person",
    "$12/person",
    "$10/person",
    "$10/person"
  ),
];

function Pricing() {
  return (
    <>
      <Navbar />
      <h1 className="pricing-heading">PRICING</h1>
      <h1>Try some of our delicious honey!</h1>

      {/*Table 1*/}
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
        .
      </h3>

      <h1>Take a tour at one of our hives!</h1>
      {/*Table 2*/}
      <Table
        sx={{ minWidth: 500, maxWidth: 900 }}
        size="medium"
        aria-label="a dense table"
        className="table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="header-cell">
              <b>Tour</b>
            </TableCell>
            <TableCell>
              <b>Lincoln</b>
            </TableCell>
            <TableCell>
              <b>Calgary</b>
            </TableCell>
            <TableCell>
              <b>Burnaby</b>
            </TableCell>
            <TableCell>
              <b>Ottawa</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.tour}</TableCell>
              <TableCell>{row.lincoln}</TableCell>
              <TableCell>{row.calgary}</TableCell>
              <TableCell>{row.burnaby}</TableCell>
              <TableCell>{row.ottawa}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="tour-discriptions">
        <h3 className="tour-discription">
          In our one hour Private Bee Tour, participants will be taken on an
          adventurous journey through the bee yard by a personal guide. You will
          engage in an interactive session where you’ll be able to learn
          about—and taste—five different, delicious honey varieties. You will
          see pollination in action and learn about the parts of a beehive,
          beekeeping, and, of course, bees!
        </h3>

        <h3 className="tour-discription">
          Are you a teacher looking to take your students on a field-trip? Our
          School Group Tour is an educational, interactive tour that opens
          students of all ages up to the world of bees. We have in and
          out-of-class learning opportunities like presentations,
          bee-observation, and honey-tasting!{" "}
        </h3>

        <h3 className="tour-discription">
          We ask that due to Covid-19, all attendees be fully-vaccinated and
          wear a mask.
        </h3>

        <h3 className="tour-discription">
          Cancellation policy: You may cancel your registration up to 24 hours
          in advance and receive a full refund. Cancellation done within 24
          hours of the tour will not be refunded.
        </h3>
      </div>

      <Footer />
    </>
  );
}

export default Pricing;
