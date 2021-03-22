import { useState } from "react";
// import {Route} from "react-router-dom"
import axios from "axios";
import { teamsURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";
// import CenterForm from "./CreateForms/CenterForm"
import "../styles/SquadForm.css";

function NewSquad(props) {
  const [teamName, setTeamName] = useState("");
  const [powerForward, setPowerForward] = useState("");
  const [pointGuard, setPointGuard] = useState("");
  const [shootingGuard, setShootingGuard] = useState("");
  const [smallForward, setSmallForward] = useState("");
  const [center, setCenter] = useState("");
  const params = useParams();
  const history = useHistory();
  // console.log(props);
  // console.log(params)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTeam = {
      teamName,
      pointGuard,
      shootingGuard,
      smallForward,
      powerForward,
      center,
    };

    if (params.id) {
      const subURL = `${teamsURL}/${params.id}`;
      await axios.put(subURL, { fields: newTeam }, config);
    } else {
      await axios.post(teamsURL, { fields: newTeam }, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="squad-form">
        <div className="form" id="team-name-create">
          <label id="team" htmlFor="team">
            Team Name:
          </label>
          <input
            required
            type="text"
            placeholder={teamName}
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <div className="form" id="pg">
          <label id="pg" htmlFor="pg">
            Point Guard
          </label>
          <input
            required
            type="text"
            value={pointGuard}
            onChange={(e) => setPointGuard(e.target.value)}
          />
        </div>
        <div className="form" id="sg">
          <label id="sg" htmlFor="sg">
            Shooting Guard
          </label>
          <input
            required
            type="text"
            value={shootingGuard}
            onChange={(e) => setShootingGuard(e.target.value)}
          />
        </div>
        <div className="form" id="sf">
          <label id="sf" htmlFor="sf">
            Small Forward
          </label>
          <input
            required
            type="text"
            value={smallForward}
            onChange={(e) => setSmallForward(e.target.value)}
          />
        </div>
        <div className="form" id="pf">
          <label id="pf" htmlFor="pf">
            Power Forward
          </label>
          <input
            required
            type="text"
            value={powerForward}
            onChange={(e) => setPowerForward(e.target.value)}
          />
        </div>
        {/* <Route>
          <CenterForm teams={props.teams }/>
        </Route> */}
        <div className="form" id="center">
          <label id="center" htmlFor="center">
            Center
          </label>
          <input
            required
            type="text"
            value={center}
            onChange={(e) => setCenter(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          We Got Next
        </button>
      </form>
    </div>
  );
}
export default NewSquad;
