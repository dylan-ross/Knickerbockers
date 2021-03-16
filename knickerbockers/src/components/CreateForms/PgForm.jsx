import { useState } from "react";

function PgForm() {
  const [name, setName] = useState("");

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
