import axios from "axios";
import { teamsURL, config } from "../services";
import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom"
import "../styles/Squads.css"
import {Link} from "react-router-dom"

function Squad(props) {
  const [teamsInfo, setTeamsInfo] = useState([]);
  const history = useHistory();
  console.log(props)
  

  useEffect(() => {
    const teamInfo = async () => {
      const resp = await axios.get(teamsURL, config);
      setTeamsInfo(resp.data.records);
      console.log(resp.data.records)
    };
    teamInfo();
  }, []);

console.log(teamsInfo)

  const handleClick = async (e) => {
    e.preventDefault();
    const benchURL = `${teamsURL}/${props.players.id}`;
    await axios.delete(benchURL, config); 
  }
  


  return (
    <div className="teams-container">
      {teamsInfo.map((teamInfo) => (
        <div key={teamInfo.id}>
          <h2 className="team-name">{teamInfo.fields.teamName}</h2>
          <p className="pg">point guard: {teamInfo.fields.pointGuard}</p>
          <p className="sg">shooting guard: {teamInfo.fields.shootingGuard}</p>
          <p className="sf">small forward: {teamInfo.fields.smallForward}</p>
          <p className="pf">power forward: {teamInfo.fields.powerForward}</p>
          <p className="center">center: {teamInfo.fields.center}</p>
          <button onClick={handleClick}>Benched</button>
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


// useEffect(()=> {
//     const bench = async () => {
//     const benchURL = `${teamsURL}/${teamInfo.id}`
//       await axios.delete(benchURL, config)
//       console.log(benchURL)
//     }
//   bench()
//   }, [])
 

  // useEffect(() => {
  //   const bench = async () => {
  //     const benchURL = `${teamsURL}/${teamInfo}`
  //     console.log(benchURL)
  //     console.log()
  //   }
  //   bench()
  // })
  // const bench = async () => {
  //   // we have to make our url (baseURL + our sitcom's id)
    // const teamURL = `${teamsURL}/${resp.dat.id}`;
  //   // axios delete request to our new url, with the config
  //   await axios.delete(sitcomURL, config);
  //   // fire the useEffect so our GET request shows the updated table
  //   props.setToggleFetch((curr) => !curr);
  // }