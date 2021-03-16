import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function TeamForm(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name,
      position,
    };
    await axios.post(baseURL, { fields: newPlayer }, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="team-form">
      <label htmlFor="team">Team Name:</label>
      <input
        required
        id="team"
        type="text"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <label htmlFor="pg">Point Guard</label>
      <input
        required
        id="pg"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="sg">Shooting Guard</label>
      <input
        required
        id="sg"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor="sf">Small Forward</label>
      <input
        required
        id="sf"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor="pf">Power Forward</label>
      <input
        required
        id="pf"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor="center">Center</label>
      <input
        required
        id="c"
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button type="submit">We Got Next</button>
      </div>
    </form>
  );
}
export default TeamForm;
