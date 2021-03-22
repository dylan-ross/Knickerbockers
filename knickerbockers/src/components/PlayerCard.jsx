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

  // const player = props.teams.find((player) => player.id === params.id);
  // if (!player) {
  //   return <h2></h2>;
  // }

  return (
    <div className="players">
      <div className="player-card">
            {/* <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fnerd-basketball-player-in-blue-white-picture-id160491538%3Fk%3D6%26m%3D160491538%26s%3D612x612%26w%3D0%26h%3DBydtaRNlL0q51LH5gsgNfoh3NCdj6aKnwPDu6M6CljM%3D&f=1&nofb=1" alt="Player Picture" width="300px" height="300px"/> */}
            <h2 className="stats" id="title">STATS</h2>
            <p className="stats">Points Per Game: {`${ppgs()}`}</p>
            <p className="stats">Assists Per Game: {`${apgs()}`}</p>
            <p className="stats">Rebounds Per Gaem: {`${rpgs()}`}</p>
          </div>
        </div>
  );
}

export default PlayerCard;
