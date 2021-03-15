import { baseURL, config } from "./services";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [teamsInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    const teamInfo = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records[1].fields);
      setTeamInfo(resp.data.records[1].fields);
    };
    teamInfo();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>knickerbockers</h1>
    </div>
  );
}

export default App;
