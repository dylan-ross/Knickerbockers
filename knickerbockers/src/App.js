import { baseURL, config } from "./services";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Form from "./components/TeamForm";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setPlayers(resp.data.records);
    };
    playerInfo();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <h1>Knickerbockers</h1>
      <Route exact path="/">
        <div className="players-container">
          {players.map((player) => (
            <Link key={player.fields.name} to={`/player/${player.fields.name}`}>
              <h2>{player.fields.name}</h2>
            </Link>
          ))}
      </div>
      </Route>
        <Route exact path="/new">
          <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route to="/player/:fields.name">
        <Player players={players} />
      </Route>
    </div>
  );
}

export default App;



