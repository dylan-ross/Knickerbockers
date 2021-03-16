import {useState} from "react"

function SfForm() {
const [name, setName] = useState("")

  return (
    <div className="form" id="sf">
      <label htmlFor="sf">Small Forward</label>
      <input
        required
        id="sf"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default SfForm;
