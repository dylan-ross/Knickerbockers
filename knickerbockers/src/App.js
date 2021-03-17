import { playerURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import NewSquad from "./components/NewSquad";
import Squad from "./components/Squad"
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
        <h1>Knickerbockers</h1>
        <div className="players-container">
          {players.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <h2>{player.fields.name}</h2>
            </Link>
          ))}
        </div>
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/team">
        <Squad setToggleFetch={setToggleFetch}/>
      </Route>
      <Route exact path="/edit/:id">
        <NewSquad setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/player/:name">
        <PlayerCard players={players} />
      </Route>
    </div>
  );
}

export default App;




