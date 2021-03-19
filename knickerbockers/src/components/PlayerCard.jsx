import {useParams} from "react-router-dom"

function PlayerCard() {
  const params = useParams()
  console.log(params)
  function stats () {
    const ppg = Math.floor(Math.random() * 30)
    const apg = Math.floor(Math.random() * 11)
    const rpg = Math.floor(Math.random() * 15)
    return ppg, apg, rpg
  }
  stats()

  return (
    <div>
      <h3>{params.name}</h3>
      <p>ppg</p>
      <p>apg</p>
      <p>rpg</p>
    </div>
  );
}

export default PlayerCard;
