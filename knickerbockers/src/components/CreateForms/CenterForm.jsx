import {useState} from "react"

function CenterForm() {
const [name, setName] = useState("")

  return (
    <div className="form" id="center">
      <label htmlFor="center">Center</label>
      <input
        required
        id="center"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default CenterForm;
