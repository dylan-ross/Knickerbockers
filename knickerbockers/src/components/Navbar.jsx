import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Nav">
      <Link className="Nav" id="next-nav" to="/new">I Got Next</Link>
      <Link className="Nav" id="sq-nav" to="/team">Squads</Link>
      <Link className="Nav" id="home-nav" to="/">Home</Link>
    </nav>
  )
}

export default Navbar;