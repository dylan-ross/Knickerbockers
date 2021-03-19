import { useState } from "react";
import axios from "axios";
import { teamsURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";
import "../styles/SquadForm.css";

function EditSquad() {
  const [teamName, setTeamName] = useState("");
  const [powerForward, setPowerForward] = useState("");
  const [pointGuard, setPointGuard] = useState("");
  const [shootingGuard, setShootingGuard] = useState("");
  const [smallForward, setSmallForward] = useState("");
  const [center, setCenter] = useState("");
  const [toggleFetch, setToggleFetch] = useState(false)
  const params = useParams("")

  const history = useHistory()
  console.log(params)

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

    const putURL = `${teamsURL}/${params.id}`
    if (putURL !== `${teamsURL}/recJ7ItCIa4v7sG6V`) {
      await axios.put(putURL, { fields: newTeam }, config);
      setToggleFetch((curr) => !curr);
      history.push("/")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="squad-form">
      <div className="form" id="team-name-create">
        <label htmlFor="team">Team Name:</label>
        <input
          required
          id="team"
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="form" id="pg">
        <label htmlFor="pg">Point Guard</label>
        <input
          id="pg"
          type="text"
          value={pointGuard}
          onChange={(e) => setPointGuard(e.target.value)}
        />
      </div>
      <div className="form" id="sg">
        <label htmlFor="sg">Shooting Guard</label>
        <input
          id="sg"
          type="text"
          value={shootingGuard}
          onChange={(e) => setShootingGuard(e.target.value)}
        />
      </div>
      <div className="form" id="sf">
        <label htmlFor="sf">Small Forward</label>
        <input
          id="sf"
          type="text"
          value={smallForward}
          onChange={(e) => setSmallForward(e.target.value)}
        />
      </div>
      <div className="form" id="pf">
        <label htmlFor="pf">Power Forward</label>
        <input
          id="pf"
          type="text"
          value={powerForward}
          onChange={(e) => setPowerForward(e.target.value)}
        />
      </div>
      <div className="form" id="center">
        <label htmlFor="center">Center</label>
        <input
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
