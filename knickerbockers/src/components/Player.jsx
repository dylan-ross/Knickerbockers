import { useParams } from "react-router-dom";
import { Route } from "react";

function Player(players) {
  const params = useParams();
  console.log(params);
  console.log(players.fields.name);

  return (
    <Route path="players/">
      <div className="teams-container">
        <p>ihfjsklef</p>
      </div>
    </Route>
  );
}
export default Player;
