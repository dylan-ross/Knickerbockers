import {useParams} from "react-router-dom"
import "../styles/PlayerCard.css"

function PlayerCard() {
  const params = useParams()
  console.log(params)
  function stats () {
    let ppg = Math.floor(Math.random() * 30)
    let apg = Math.floor(Math.random() * 11)
    let rpg = Math.floor(Math.random() * 15)
    
    
  }
  stats()


  return (
    <div className="player-card">
      <h3 className="player-name">{params.name}</h3>
      <p>{`${ stats() }`}</p>
      <p>apg</p>
      <p>rpg</p>
    </div>
  );
}

export default PlayerCard;
