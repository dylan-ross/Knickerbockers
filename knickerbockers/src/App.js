// import { playerURL, config } from "./services";
import { Route } from "react-router-dom";
// import axios from "axios";
import Navbar from "./components/Navbar";
import KnicksCard from "./components/KnicksCard";
import NewSquad from "./components/NewSquad";
import EditSquad from "./components/EditSquad";
import Squad from "./components/Squad";
import Knicks from "./components/Knicks";
// import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [players, setPlayers] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(false);

  // useEffect(() => {
  //   const playerInfo = async () => {
  //     const resp = await axios.get(playerURL, config);
  //     setPlayers(resp.data.records);
  //   };
  //   playerInfo();
  // }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Squad />
      </Route>
      <Route exact path="/new">
        <NewSquad />
      </Route>
      <Route exact path="/edit/:id">
        <EditSquad />
      </Route>
      <Route path="/knicks">
        <Knicks />
      </Route>
      <Route path="/player/:name">
        <KnicksCard />
      </Route>
    </div>
  );
}

export default App;
