import { playerURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import KnicksCard from "./components/KnicksCard";
import NewSquad from "./components/NewSquad";
import Squad from "./components/Squad";
import Knicks from "./components/Knicks";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(playerURL, config);
      setPlayers(resp.data.records);
    };
    playerInfo();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Squad setToggleFetch={setToggleFetch} players={players} />
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/edit/:id">
        <NewSquad setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/knicks">
        <Knicks />
      </Route>
      <Route path="/player/:name">
        <KnicksCard players={players} />
      </Route>
    </div>
  );
}

export default App;
