import { useState } from "react";
import axios from "axios";
import { teamsURL, config } from "../services";
import TeamForm from "./CreateForms/TeamForm"
import PgForm from "./CreateForms/PgForm"
import SgForm from "./CreateForms/SgForm" 
import SfForm from "./CreateForms/SfForm"
import PfForm from "./CreateForms/PfForm"
import CenterForm from "./CreateForms/CenterForm"
import Button from "./CreateForms/Button"

function NewSquad(props) {
const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTeam = {
      name,
    };
    await axios.post(teamsURL, { fields: newTeam }, config);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="team-form">
        <TeamForm />
        <PgForm />
        <SgForm />
        <SfForm />
        <PfForm />
        <CenterForm />
        <button type="submit">We Got Next</button>
      </div>
    </form>
  );
}
export default NewSquad;
