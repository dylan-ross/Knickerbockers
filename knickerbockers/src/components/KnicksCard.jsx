import axios from "axios";
import { playerURL, config } from "../services";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom"
import "../styles/Card.css";

function KnicksCard() {
  const [players, setPlayers] = useState([])
  const params = useParams()
  
  useEffect(() => {
    const playerInfo = async () => {
      const resp = await axios.get(playerURL, config);
      setPlayers(resp.data.records);
    };
    playerInfo();
  }, []);
   
  
  const player = players.find((player) => player.id === params.name);
  if (!player) {
    return <h2></h2>;
  }
  return (
    <div className="player-card">
      <div className="player-pic">
        <h2 className="player-name">{player.fields.name}</h2>
        <img className="player-pic" src={player.fields.pic} alt="player-pic"/>
        <h3 className="player-position">{player.fields.position}</h3>
        <p className="ppg">Points per game {player.fields.pointsPerGame}</p>
        <p className="apg">Assists per game {player.fields.assistsPerGame}</p>
        <p className="rpg">Rebounds per game {player.fields.reboundsPerGame}</p>
      </div>
    </div>
  );
}
export default KnicksCard;
