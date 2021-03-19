import { useEffect, useState } from "react";
import { playerURL, config } from "../services";
import { Link, Route } from "react-router-dom";
import KnicksCard from "./KnicksCard"
import "../styles/Knicks.css"
import axios from "axios";

function Knicks() {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(playerURL, config);
      setPlayers(resp.data.records);
      console.log(resp.data.records)
    };
    playerInfo();
  }, []);

  return (
    <div className="knicks">
      <div className="players-container">
        {players.map((player) => (
          <Link key={player.id} to={`/player/${player.id}`}>
            <h2 className="knickerbockers" id={player.id }>{player.fields.name}</h2>
          </Link>
        ))}
      </div>
      <Route path="/player/:id">
        <KnicksCard />
      </Route>
    </div>
  );
}

export default Knicks
