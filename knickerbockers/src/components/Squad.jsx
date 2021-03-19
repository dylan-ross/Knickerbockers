import axios from "axios";
import { teamsURL, config } from "../services";
import "../styles/Squads.css";
import { Link, Route, useHistory } from "react-router-dom";
import PlayerCard from "./PlayerCard";

function Squad(props) {
  const history = useHistory();
  console.log(props)


  const handleClick = async (id) => {
    const benchURL = `${teamsURL}/${id}`;
    if (benchURL !== `${teamsURL}/recJ7ItCIa4v7sG6V`) {
      await axios.delete(benchURL, config);
      props.setToggleFetch((curr) => !curr);
      history.push("/");
    }
  };

  return (
    <div className="teams-container">
      <h1 id="squads">SQUADS</h1>
      {props.teams.map((team) => (
        <div key={team.id} className="team-box" id={team.id}>
          <h2 className="team-name">{team.fields.teamName}</h2>
          <Link
            key={team.fields.pointGuard}
            to={`/player/${team.fields.pointGuard}`}
          >
            <p className="player" id="pg">
              point guard: {team.fields.pointGuard}
            </p>
          </Link>
          <Link
            key={team.fields.shootingGuard}
            to={`/player/${team.id}`}
          >
            <p className="player" id="sg">
              shooting guard: {team.fields.shootingGuard}
            </p>
          </Link>
          <Link
            key={team.fields.smallForward}
            to={`/player/${team.id}`}
          >
            <p className="player" id="sf">
              small forward: {team.fields.smallForward}
            </p>
          </Link>
          <Link
            key={team.fields.powerForward}
            to={`/player/${team.id}`}
          >
            <p className="player" id="pf">
              power forward: {team.fields.powerForward}
            </p>
          </Link>
          <Link key={team.fields.center} to={`/player/${team.id}`}>
            <p className="player" id="center">
              center: {team.fields.center}
            </p>
          </Link>
          <button onClick={() => handleClick(team.id)}>Benched</button>
          <Link to={`/edit/${team.id}`}>
            <button>subs</button>
          </Link>
          <Route path={`/player/${team.fields.pointGuard}`}>
            <PlayerCard teams={props} />
          </Route>
        </div>
      ))}
    </div>
  );
}

export default Squad;
