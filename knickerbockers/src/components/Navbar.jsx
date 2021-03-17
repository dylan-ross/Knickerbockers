import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav" id="next-nav" to="/new">I Got Next</Link>
      <Link className="nav" id="sq-nav" to="/team">Squads</Link>
      <Link className="nav" id="home-nav" to="/">Home</Link>
    </nav>
  )
}

export default Navbar;