import logo from "./logo.svg";
import Header from "./components/Header";
import Sessions from "./components/Sessions";
import BreakRooms from "./components/BreakRooms";
import GameCorner from "./components/GameCorner";
import Typography from "@mui/material/Typography";
import Reminders from "./components/Reminders";

function MainPage() {
  const sessionsData = getSessionsData();
  console.log(sessionsData);
  const breakRoomsData = getBreakRoomData();
  const gameCornerData = getGameCornerData();
  const remindersData = getRemindersData();
  return (
    <div className="App">
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        List of Sessions
      </Typography>
      <Sessions sessions={sessionsData} />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        List of Break Rooms
      </Typography>
      <BreakRooms breakRooms={breakRoomsData} />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        Game Corner
      </Typography>
      <GameCorner games={gameCornerData} />
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1 }}
      >
        List of Reminder Rooms
      </Typography>
      <Reminders reminders={remindersData} />
    </div>
  );

  function getSessionsData() {
    // axios.post(URL, { sampleData })
    // https://axios-http.com/docs/post_example

    return [
      {
        name: "Chitra",
        type: "Dance",
        schedule: "Mon 2-3 PM",
        link: "123.txt",
      },
      {
        name: "Akhil",
        type: "Yoga",
        schedule: "Wed 3-4 PM",
        link: "345.txt",
      },
    ];
  }

  function getBreakRoomData() {
    return [
      {
        name: "Chitra",
        link: "link124",
      },
      {
        name: "Akhil",
        link: "Link126",
      },
    ];
  }

  function getGameCornerData() {
    return [
      {
        name: "Chitra",
        game: "Chess",
        link: "123.txt",
      },
      {
        name: "Akhil",
        game: "Checkers",
        link: "345.txt",
      },
    ];
  }

  function getRemindersData() {
    return [
      {
        name: "Chitra",
        type: "Birthday",
        detail: "March 11, 1974",
        link: "Teams1Link",
      },
      {
        name: "Akhil",
        type: "Anniversary",
        detail: "Sep 12, 2020",
        link: "Teams2Link",
      },
    ];
  }
}

export default MainPage;
