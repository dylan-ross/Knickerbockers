import axios from "axios";
import { teamsURL, config } from "../services";
import { useEffect, useState } from "react";

import {Link} from "react-router-dom"

function Squad() {
  const [teamsInfo, setTeamsInfo] = useState([]);

  useEffect(() => {
    const teamInfo = async () => {
      const resp = await axios.get(teamsURL, config);
      setTeamsInfo(resp.data.records);
      console.log(resp.data.records[0].id)
    };
    teamInfo();
  }, []);
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

  return (
    <div className="teams-container">
      {teamsInfo.map((teamInfo) => (
        <div key={teamInfo.id}>
          <h2>{teamInfo.fields.teamName}</h2>
          <p>point guard: {teamInfo.fields.pointGuard}</p>
          <p>shooting guard: {teamInfo.fields.shootingGuard}</p>
          <p>small forward: {teamInfo.fields.smallForward}</p>
          <p>power forward: {teamInfo.fields.powerForward}</p>
          <p>center: {teamInfo.fields.center}</p>
          <button>Benched</button>
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
