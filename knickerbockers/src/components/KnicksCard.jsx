import { useParams } from "react-router-dom";
import "../styles/KnicksCard.css";

function KnicksCard(props) {
  const params = useParams();

  const knick = props.knicks.find((knick) => knick.id === params.id);
  if (!knick) {
    return <h2></h2>;
  }
  return (
    <div className="knick-card">
      <div className="knick-info">
        <h2 className="knick-name">{knick.fields.name}</h2>
        <img className="knick-pic" src={knick.fields.pic} alt="player-pic" />
        <h3 className="knick-position">{knick.fields.position}</h3>
        <p className="knick-ppg">
          Points per game {knick.fields.pointsPerGame}
        </p>
        <p className="knick-apg">
          Assists per game {knick.fields.assistsPerGame}
        </p>
        <p className="knick-rpg">
          Rebounds per game {knick.fields.reboundsPerGame}
        </p>
      </div>
    </div>
  );
}
export default KnicksCard;
