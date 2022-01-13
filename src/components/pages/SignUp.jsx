import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  /*Tour Types */
  const types = [
    {
      value: "Private Bee Tour",
      label: "Private Bee Tour",
    },
    {
      value: "School Group Tour",
      label: "School Group Tour",
    },
  ];

  const [type, setType] = React.useState("Private Bee Tour");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  /*Tour Locations */
  const locations = [
    {
      value: "Lincoln",
      label: "Lincoln",
    },
    {
      value: "Calgary	",
      label: "Calgary	",
    },
    {
      value: "Burnaby	",
      label: "Burnaby	",
    },
    {
      value: "Ottawa	",
      label: "Ottawa	",
    },
  ];

  const [location, setLocation] = React.useState("Lincoln");
  const handleChange2 = (event) => {
    setLocation(event.target.value);
  };

  /*Tour Times */
  const times = [
    {
      value: "Morning",
      label: "Morning",
    },
    {
      value: "Noon	",
      label: "Noon	",
    },
    {
      value: "Afternoon	",
      label: "Afternoon	",
    },
  ];

  const [time, setTime] = React.useState("Morning");

  const handleChange3 = (event) => {
    setTime(event.target.value);
  };

  const containerStyle = {
    "margin-bottom": "40px",
    "margin-top": "-30px",
  };

  const buttonStyle = {
    "background-color": "rgb(254, 144, 4)",
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={containerStyle}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up for a tour
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  name="tour-type"
                  label="Tour Type"
                  type="radio"
                  id="tour-type"
                  value={type}
                  onChange={handleChange}
                >
                  {types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  name="tour-location"
                  label="Tour Location"
                  type="radio"
                  id="tour-location"
                  value={location}
                  onChange={handleChange2}
                >
                  {locations.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  select
                  name="tour-time"
                  label="Tour Time"
                  type="radio"
                  id="tour-time"
                  value={time}
                  onChange={handleChange3}
                >
                  {times.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="attendees"
                  label="Number of Attendees"
                  name="attendees"
                  autoComplete="num-attendees"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive honey and tour discount offers via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={buttonStyle}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
