import { Link } from "react-router-dom";
import "../styles/Nav.css"
function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav" id="next-nav" to="/new">I Got Next</Link>
      <Link className="nav" id="sq-nav" to="/">Squads</Link>
      <Link className="nav" id="home-nav" to="/knicks">Knicks</Link>
    </nav>
  )
}

export default Navbar;