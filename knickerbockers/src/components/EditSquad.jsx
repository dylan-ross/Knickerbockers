import { useState } from "react";
import axios from "axios";
import { teamsURL, config } from "../services";
import{useHistory} from "react-router-dom"
import "../styles/SquadForm.css"

function EditSquad(props) {
  const [teamName, setTeamName] = useState("");
  const [powerForward, setPowerForward] = useState("");
  const [pointGuard, setPointGuard] = useState("");
  const [shootingGuard, setShootingGuard] = useState("");
  const [smallForward, setSmallForward] = useState("");
  const [center, setCenter] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false)
  const history = useHistory()


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

    // if (props.id) {
    //   const putURL = `${teamsURL}/team.id`
    //   await axios.put(putURL, { fields: newTeam }, config);
    // } else {
    //   await axios.post(teamsURL, { fields: newTeam }, config);
    // }

    await axios.put(teamsURL, { fields: newTeam }, config);
    props.setToggleFetch((curr) => !curr);
    history.push("/")
    // console.log(teamName)
  };

  return (
    <form onSubmit={handleSubmit} className="squad-form">
      {/* <div className="form" id="team-name-create">
        <label htmlFor="team">Team Name:</label>
        <input
          required
          id="team"
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div> */}
      <div className="form" id="pg">
        <label htmlFor="pg">Point Guard</label>
        <input
          required
          id="pg"
          type="text"
          value={pointGuard}
          onChange={(e) => setPointGuard(e.target.value)}
        />
      </div>
      <div className="form" id="sg">
        <label htmlFor="sg">Shooting Guard</label>
        <input
          required
          id="sg"
          type="text"
          value={shootingGuard}
          onChange={(e) => setShootingGuard(e.target.value)}
        />
      </div>
      <div className="form" id="sf">
        <label htmlFor="sf">Small Forward</label>
        <input
          required
          id="sf"
          type="text"
          value={smallForward}
          onChange={(e) => setSmallForward(e.target.value)}
        />
      </div>
      <div className="form" id="pf">
        <label htmlFor="pf">Power Forward</label>
        <input
          required
          id="pf"
          type="text"
          value={powerForward}
          onChange={(e) => setPowerForward(e.target.value)}
        />
      </div>
      <div className="form" id="center">
        <label htmlFor="center">Center</label>
        <input
          required
          id="center"
          type="text"
          value={center}
          onChange={(e) => setCenter(e.target.value)}
        />
      </div>
      <button className="submit" type="submit">
        We Got Next
      </button>
    </form>
  );
}
export default EditSquad;