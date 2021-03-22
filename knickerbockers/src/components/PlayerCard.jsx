import { useParams } from "react-router-dom";
import "../styles/PlayerCard.css";

function PlayerCard(props) {
  const params = useParams();
  console.log(params);
  console.log(props);
  function ppgs() {
    let ppg = Math.floor(Math.random() * 30);
    return ppg;
  }
  ppgs();

  function apgs() {
    let apg = Math.floor(Math.random() * 11);
    return apg;
  }
  apgs();

  function rpgs() {
    let rpg = Math.floor(Math.random() * 11);
    return rpg;
  }
  apgs();


  return (
    <div className="players">
      <div className="player-card">
        <h2 className="stats" id="title">
          STATS
        </h2>
        <p className="stats">Points Per Game: {`${ppgs()}`}</p>
        <p className="stats">Assists Per Game: {`${apgs()}`}</p>
        <p className="stats">Rebounds Per Gaem: {`${rpgs()}`}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
