import { playerURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import NewSquad from "./components/NewSquad";
import Squad from "./components/Squad"
import EditSquad from "./components/EditSquad"
import Knicks from "./components/Knicks"
import { useEffect, useState } from "react";
import "./App.css"

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
        <Squad setToggleFetch={setToggleFetch} players={players}/>
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/edit/:id">
        <EditSquad players={players }/>
      </Route>
      <Route path="/player/:name">
        <PlayerCard players={players} />
      </Route>
      <Route path="/knicks">
        <Knicks/>
      </Route>
    </div>
  );
}

export default App;




