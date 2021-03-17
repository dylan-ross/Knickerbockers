import { useEffect, useState } from "react";
import axios from "axios";
import { playerURL, config } from "../services";
import {useHistory, useParams} from "react-router-dom"
import TeamForm from "./CreateForms/TeamForm"
import PgForm from "./CreateForms/PgForm"
import SgForm from "./CreateForms/SgForm" 
import SfForm from "./CreateForms/SfForm"
import PfForm from "./CreateForms/PfForm"
import CenterForm from "./CreateForms/CenterForm"
import Button from "./CreateForms/Button"


function NewSquad(props) {
  const [name, setName] = useState("")
  const [powerForward, setPowerForward] = useState("")
  const [pointGuard, setPointGuard] = useState("")
  const [shootingGuard, setShootingGuard] = useState("")
  const [smallForward, setSmallForward] = useState("")
  const [center, setCenter] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTeam = {
      name,
    };
    await axios.post(playerURL, { fields: newTeam }, config);
    props.setToggleFetch((curr) => !curr);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="team-form">
        <TeamForm />
        <PgForm />
        <SgForm />
        <SfForm />
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
        <button className="submit"type="submit">We Got Next</button>
      </div>
    </form>
  );
}
export default NewSquad;
