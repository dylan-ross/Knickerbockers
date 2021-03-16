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
  console.log(props)
  const [name, setName] = useState("")
  
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
        <TeamForm name={name}/>
        <PgForm name={name}/>
        <SgForm name={name}/>
        <SfForm name={name}/>
        <PfForm name={name}/>
        <CenterForm name={name}/>
        <button className="submit"type="submit">We Got Next</button>
      </div>
    </form>
  );
}
export default NewSquad;
