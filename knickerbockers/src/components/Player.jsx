import { useParams } from "react-router-dom";
import {Route} from "react"

function Player() {
  const params = useParams();
  console.log(params);

  return (
    
      <div className="player-card">
      <h2>{params.name }</h2>
      </div>
    
  );
}
export default Player;
