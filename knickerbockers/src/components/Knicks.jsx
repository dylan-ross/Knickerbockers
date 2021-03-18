import { useEffect, useState } from "react";
import { playerURL, config } from "../services";
import { Link, Route } from "react-router-dom";
import axios from "axios";

function Knicks() {
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
    <div>
      <h1>Knicks</h1>
      <div className="players-container">
        {players.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>
            <h2>{player.fields.name}</h2>
          </Link>
        ))}
        </div>
    </div>
  );
}

export default Knicks
