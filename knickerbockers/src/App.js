import { Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import {playerURL, teamsURL, config} from "./services/index"
import Navbar from "./components/Navbar";
import KnicksCard from "./components/KnicksCard";
import NewSquad from "./components/NewSquad";
import Squad from "./components/Squad";
import Knicks from "./components/Knicks";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

function App() {
  const [knicks, setKnicks] = useState([])
  const [teams, setTeams] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const playerInfo = async () => {
      const playerResp = await axios.get(playerURL, config);
      setKnicks(playerResp.data.records);
    };
    playerInfo();

    const teamInfo = async () => {
      const teamsResp = await axios.get(teamsURL, config);
      setTeams(teamsResp.data.records);
    }
    teamInfo()
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Squad setToggleFetch={setToggleFetch } teams={teams}/>
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch } teams={teams }/>
      </Route>
      <Route exact path="/edit/:id">
        <NewSquad setToggleFetch={setToggleFetch } teams={teams }/>
      </Route>
      <Route path="/player/:name">
        <PlayerCard teams={teams }/>
      </Route>
      <Route path="/knicks">
        <Knicks knicks={knicks}/>
      </Route>
      <Route path="/knick/:id">
        <KnicksCard knicks={knicks}/>
      </Route>
    </div>
  );
}

export default App;
