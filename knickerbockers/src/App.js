import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import TeamForm from "./components/TeamForm";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(baseURL, config);
      setPlayers(resp.data.records);
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
        <TeamForm setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/player/:fields.name">
        <Player players={players} />
      </Route>
    </div>
  );
}

export default App;
