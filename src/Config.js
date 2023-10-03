import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Header from "./components/Header";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";

function Config() {
  var data = {
    name: "",
    link: "",
    game: "",
    detail: "",
    type: "",
    schedule: "",
  };
  const [eventType, setEventType] = React.useState("session");

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  console.log(data);
  return (
    <div className="App">
      <Header title="Hackathon Project" />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        Create Event
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Box alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Event Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="radiobuttons"
            onChange={handleChange}
            defaultValue={"session"}
          >
            <FormControlLabel
              value="session"
              control={<Radio />}
              label="Session"
            />
            <FormControlLabel
              value="breakroom"
              control={<Radio />}
              label="BreakRoom"
            />
            <FormControlLabel value="game" control={<Radio />} label="Game" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        marginTop="20px"
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(event) => (data["name"] = event.target.value)}
        />

        {eventType == "reminder" && (
          <TextField
            id="outlined-required"
            label="Type"
            required
            onChange={(event) => (data["type"] = event.target.value)}
          />
        )}
        {eventType == "reminder" && (
          <TextField
            id="outlined-required"
            label="Detail"
            required
            onChange={(event) => (data["detail"] = event.target.value)}
          />
        )}
        {eventType == "reminder" && (
          <TextField
            id="outlined-required"
            label="Link"
            required
            onChange={(event) => (data["link"] = event.target.value)}
          />
        )}
        {eventType == "session" && (
          <TextField
            id="outlined-required"
            label="Type"
            required
            onChange={(event) => (data["type"] = event.target.value)}
          />
        )}
        {eventType == "session" && (
          <TextField
            id="outlined-required"
            label="Schedule"
            required
            onChange={(event) => (data["schedule"] = event.target.value)}
          />
        )}
        {eventType == "session" && (
          <TextField
            id="outlined-required"
            label="Link"
            required
            onChange={(event) => (data["link"] = event.target.value)}
          />
        )}
        {eventType == "breakroom" && (
          <TextField
            id="outlined-required"
            label="Link"
            required
            onChange={(event) => (data["link"] = event.target.value)}
          />
        )}
        {eventType == "game" && (
          <TextField
            id="outlined-required"
            label="Type"
            required
            onChange={(event) => (data["type"] = event.target.value)}
          />
        )}
        {eventType == "game" && (
          <TextField
            id="outlined-required"
            label="Link"
            required
            onChange={(event) => (data["link"] = event.target.value)}
          />
        )}
      </Box>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        textAlign={"center"}
        marginTop="20px"
      >
        <Button onClick={postNewData}>Submit</Button>
      </Box>
    </div>
  );

  function postNewData(event) {
    // TODO: logic to call your API
    // axios.post ...
    // https://axios-http.com/docs/post_example
    // data is stored in variable called data
  }
}

export default Config;
