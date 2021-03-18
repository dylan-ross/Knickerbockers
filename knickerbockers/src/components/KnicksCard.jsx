import "../styles/Card.css";

function KnicksCard(props) {
console.log(props) 
   
  
  // const player = params.find((player) => player.name === params.name);
  // console.log(player)
  // if (!player) {
  //   return <h2></h2>;
  // }
  return (
    <div className="player-card">
      <h2></h2>
      {/* <div className="player-pic">
        <h2 className="player-name">{player.fields.name}</h2>
        <img className="player-pic" src={player.fields.pic} />
        <h3 className="player-position">{player.fields.position}</h3>
        <p className="ppg">Points per game {player.fields.pointsPerGame}</p>
        <p className="apg">Assists per game {player.fields.assistsPerGame}</p>
        <p className="rpg">Rebounds per game {player.fields.reboundsPerGame}</p>
      </div> */}
    </div>
  );
}
export default KnicksCard;
