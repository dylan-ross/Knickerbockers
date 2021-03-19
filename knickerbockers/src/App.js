import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import KnicksCard from "./components/KnicksCard";
import NewSquad from "./components/NewSquad";
import EditSquad from "./components/EditSquad";
import Squad from "./components/Squad";
import Knicks from "./components/Knicks";
import PlayerCard from "./components/PlayerCard";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Squad />
      </Route>
      <Route exact path="/new">
        <NewSquad />
      </Route>
      <Route exact path="/edit/:id">
        <EditSquad />
      </Route>
      <Route path="/knicks">
        <Knicks />
      </Route>
      <Route path="/player/:name">
        <KnicksCard />
      </Route>
      <Route path="/player/:name">
      <PlayerCard />
      </Route>
    </div>
  );
}

export default App;
