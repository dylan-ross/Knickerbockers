import { useState } from "react";

function TeamForm() {
const [name, setName] = useState("")

  return (
    <div className="team-name-search">
      <label htmlFor="team">Team Name:</label>
      <input
        required
        id="team"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default TeamForm;
