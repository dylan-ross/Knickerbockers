import axios from "axios";
import { teamsURL, config } from "../services";
import { useEffect, useState } from "react";
import "../styles/Squads.css";
import { Link, Route, useHistory } from "react-router-dom";
import PlayerCard from "./PlayerCard";

function Squad() {
  const [teamsInfo, setTeamsInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const teamInfo = async () => {
      const resp = await axios.get(teamsURL, config);
      setTeamsInfo(resp.data.records);
    };
    teamInfo();
  }, [toggleFetch]);

  const handleClick = async (id) => {
    const benchURL = `${teamsURL}/${id}`;
    await axios.delete(benchURL, config);
    setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div className="teams-container">
      <h1 id="squads">SQUADS</h1>
      {teamsInfo.map((teamInfo) => (
        <div key={teamInfo.id} className={teamInfo.id}>
          <h2 className="team-name">{teamInfo.fields.teamName}</h2>
          <Link
            key={teamInfo.fields.pointGuard}
            to={`/player/${teamInfo.fields.pointGuard}`}
          >
            <p className="player" id="pg">
              point guard: {teamInfo.fields.pointGuard}
            </p>
          </Link>
          <Link
            key={teamInfo.fields.shootingGuard}
            to={`/player/${teamInfo.id}`}
          >
            <p className="player" id="sg">
              shooting guard: {teamInfo.fields.shootingGuard}
            </p>
          </Link>
          <Link
            key={teamInfo.fields.smallForward}
            to={`/player/${teamInfo.id}`}
          >
            <p className="player" id="sf">
              small forward: {teamInfo.fields.smallForward}
            </p>
          </Link>
          <Link
            key={teamInfo.fields.powerForward}
            to={`/player/${teamInfo.id}`}
          >
            <p className="player" id="pf">
              power forward: {teamInfo.fields.powerForward}
            </p>
          </Link>
          <Link key={teamInfo.fields.center} to={`/player/${teamInfo.id}`}>
            <p className="player" id="center">
              center: {teamInfo.fields.center}
            </p>
          </Link>
          <button onClick={() => handleClick(teamInfo.id)}>Benched</button>
          <Link to={`/edit/${teamInfo.id}`}>
            <button>subs</button>
          </Link>
          <Route path={`/player/${teamInfo.fields.pointGuard}`}>
            <PlayerCard teamInfo={teamsInfo} />
          </Route>
        </div>
      ))}
    </div>
  );
}

export default Squad;
