import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">I got Next</Link>
      <Link to="/new">Squads</Link>
    </nav>
  )
}

export default Navbar;