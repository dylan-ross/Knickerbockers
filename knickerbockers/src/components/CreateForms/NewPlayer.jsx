import { useState } from "react";
import axios from "axios";

function NewPlayer(props) {
  const [name, setName] = useState("");
  const [postion, setPosition] = useState("");
  const [team, setTeam] = useState("");
  // const [pointsPerGame, setPointsPerGame] = useState(0);
  // const [assistsPerGame, setAssistsPerGame] = useState(0);
  // const [reboundsPerGame, setReboundsPerGame] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPlayer = {
      name,
      position,
      team,
      // pointsPerGame,
      // assistsPerGame,
      // reboundsPerGame,
    };
    await axios.post(playerURL, { fields: newPlayer }, config);
  };

  return (
    <div className="form" id="pg">
      <label htmlFor="pg">Point Guard</label>
      <input
        required
        id="pg"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default PgForm;


