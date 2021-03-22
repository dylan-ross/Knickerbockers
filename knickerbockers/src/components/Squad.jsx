import axios from "axios";
import { teamsURL, config } from "../services";
import "../styles/Squads.css";
import { Link, Route, useHistory } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import Player from "./Player";

function Squad(props) {
  const history = useHistory();

  const handleClick = async (id) => {
    const benchURL = `${teamsURL}/${id}`;
    await axios.delete(benchURL, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div className="teams-container">
      <h1 id="squads">SQUADS</h1>
      <div className="teams">
        {props.teams.map((team) => (
          <div key={team.id} className="team-box" id={team.id}>
            <h2 className="team-name">{team.fields.teamName}</h2>
            <div className="position">
            <p>point guard:</p>
            <Link
              key={team.fields.pointGuard}
              to={`/player/${team.fields.pointGuard}`}
              >
          
              <Player player={team.fields.pointGuard} />
              </Link>
            </div>
            <div className="position">
            <p>shooting guard:</p>
            <Link key={team.fields.shootingGuard} to={`/player/${team.id}`}>
              <Player player={team.fields.shootingGuard} />
              </Link>
            </div>
            <div className="position">
            <p>small forward:</p>
            <Link key={team.fields.smallForward} to={`/player/${team.id}`}>
              <Player player={team.fields.smallForward} />
              </Link>
            </div>
            <div className="position">
            <p>power forward:</p>
            <Link key={team.fields.powerForward} to={`/player/${team.id}`}>
              <Player player={team.fields.powerForward} />
              </Link>
            </div>
            <div className="position">
            <p>center:</p>
            <Link key={team.fields.center} to={`/player/${team.id}`}>
              <Player player={team.fields.center} />
              </Link>
              </div>
            <button onClick={() => handleClick(team.id)}>Benched</button>
            <Link to={`/edit/${team.id}`}>
              <button>subs</button>
            </Link>
            <Route path="/player">
              <PlayerCard teams={props} />
            </Route>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Squad;
