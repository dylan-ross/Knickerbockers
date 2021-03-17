import { useParams } from "react-router-dom";

function PlayerCard(props) {
  const params = useParams()
  const player = (props.players.find((player)=>player.id === params.name));

  return (
    <div className="player-card">
      <h2>{player.fields.name}</h2>
      <h3>{player.fields.position}</h3>
      <p>Points per game {player.fields.pointsPerGame}</p>
      <p>Assists per game {player.fields.assistsPerGame}</p>
      <p>Rebounds per game {player.fields.reboundsPerGame}</p>
    </div>
  );
}
export default PlayerCard;
