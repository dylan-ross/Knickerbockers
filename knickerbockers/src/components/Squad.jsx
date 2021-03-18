import axios from "axios";
import { teamsURL, config } from "../services";
import { useEffect, useState } from "react";
import "../styles/Squads.css"
import { Link, useHistory} from "react-router-dom"


function Squad(props) {
  const [teamsInfo, setTeamsInfo] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory()
  

  useEffect(() => {
    const teamInfo = async () => {
      const resp = await axios.get(teamsURL, config);
      setTeamsInfo(resp.data.records);
    };
    teamInfo();
  }, [toggleFetch]);

console.log(props)

  const handleClick = async (id) => {
    const benchURL = `${teamsURL}/${id}`;
    await axios.delete(benchURL, config);
    setToggleFetch((curr) => !curr)
    history.push("/")
  }
  


  return (
    <div className="teams-container">
      {teamsInfo.map((teamInfo) => (
        <div key={teamInfo.id} className={teamInfo.id}>
          <h2 className="team-name">{teamInfo.fields.teamName}</h2>
          <p className="pg">point guard: {teamInfo.fields.pointGuard}</p>
          <p className="sg">shooting guard: {teamInfo.fields.shootingGuard}</p>
          <p className="sf">small forward: {teamInfo.fields.smallForward}</p>
          <p className="pf">power forward: {teamInfo.fields.powerForward}</p>
          <p className="center">center: {teamInfo.fields.center}</p>
          <button onClick={()=>handleClick( teamInfo.id)}>Benched</button>
          <Link to={`/edit/${teamInfo.id}`}>
        <button>
          subs
        </button>
      </Link>
        </div>
      ))}
    </div>
  );
}

export default Squad;



  