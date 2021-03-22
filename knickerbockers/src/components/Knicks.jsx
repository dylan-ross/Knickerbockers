import { Link, Route } from "react-router-dom";
import KnicksCard from "./KnicksCard"
import "../styles/Knicks.css"

function Knicks(props) {

  return (
    <div className="knicks">
      <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-1r8i1TlSM7E%2FXA8xvWgs9HI%2FAAAAAAAAB3E%2Fyw6FibzF-XE8UKYBJRyCqJV3SrHK7857wCHMYCw%2Fs1600%2Fknicks-logos.jpg&f=1&nofb=1" alt="knicks logo"/>
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
