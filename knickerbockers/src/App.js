import { teamsURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import KnicksCard from "./components/KnicksCard";
import NewSquad from "./components/NewSquad";
import EditSquad from "./components/EditSquad";
import Squad from "./components/Squad";
import Knicks from "./components/Knicks";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const teamsInfo = async () => {
      const resp = await axios.get(teamsURL, config);
      setTeams(resp.data.records);
    };
    teamsInfo();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Squad setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/new">
        <NewSquad setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/edit/:id">
        <EditSquad setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/knicks">
        <Knicks />
      </Route>
      {/* <Route path="/player/:name">
        <KnicksCard />
      </Route> */}
    </div>
  );
}

export default App;
