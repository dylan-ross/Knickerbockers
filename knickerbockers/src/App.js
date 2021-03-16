import { playerURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import NewSquad from "./components/Squad";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(playerURL, config);
      setPlayers(resp.data.records);
      console.log(resp.data.records);
    };
    playerInfo();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h1>Knickerbockers</h1>
        <div className="players-container">
          {players.map((player) => (
            <Link key={player.fields.name} to={`/player/${player.fields.name}`}>
              <h2>{player.fields.name}</h2>
            </Link>
          ))}
        </div>
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/player/:name">
        <Player players={players} />
      </Route>
    </div>
  );
}

export default App;




{/* <Route path="/new">
<Form setToggleFetch={setToggleFetch} />
</Route> */}

// {
  /* <Link to="/Clyde">Walt Frazier</Link>
          <Route exact path="/Clyde">
            <div>
              <h2>Walt "Clyde" Frazier</h2>
              </div>
          </Route> */

  /* <Link to="/BK">Bernard King</Link>
          <Link to="/Melo">Carmelo Anthony</Link>
          <Link to="/Willis">Willis Reed</Link>
          <Link to="/Pat">Patrick Ewing</Link> */

