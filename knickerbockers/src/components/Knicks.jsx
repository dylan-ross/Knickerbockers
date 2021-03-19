import { Link, Route } from "react-router-dom";
import KnicksCard from "./KnicksCard"
import "../styles/Knicks.css"

function Knicks(props) {

  return (
    <div className="knicks">
      <div className="players-container">
        {props.knicks.map((knick) => (
          <Link key={knick.id} to={`/knick/${knick.id}`}>
            <h2 className="knickerbockers" id={knick.id }>{knick.fields.name}</h2>
          </Link>
        ))}
      </div>
      <Route path="/knick/:id">
        <KnicksCard />
      </Route>
    </div>
  );
}

export default Knicks
