import {useState} from "react"

function PfForm() {
const [name, setName] = useState("")

  return (
    <div className="form" id="pf">
      <label htmlFor="pf">Power Forward</label>
      <input
        required
        id="pf"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default PfForm;
