import {useState} from "react"

function SgForm() {
  const [name, setName] = useState("")

  return (
    <div className="form" id="sg">
      <label htmlFor="sg">Shooting Guard</label>
      <input
        required
        id="sg"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default SgForm;
