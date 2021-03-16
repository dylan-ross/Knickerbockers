import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/new">I Got Next</Link>
      <Link to={`/team/`}>Squads</Link>
      <Link to="/">Home</Link>
    </nav>
  )
}

export default Navbar;