import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Player(props) {
  console.log(props.players)
  const params = useParams()
  const player = props.players.find((player) => props.name === player.name);
  console.log(player)
  console.log(params)

  return (
    <div className="player-card">
      {/* <h2>{player.fields.name}</h2>
      <h3>{player.fields.position}</h3>
      <p>{player.fields.pointsPerGame}</p>
      <p>{player.fields.assitsPerGame}</p>
      <p>{player.fields.reboundsPerGame}</p> */}
    </div>
  );
}
export default Player;
