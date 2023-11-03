import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h4>
        <Link to="/"> Tereva Millet </Link>
      </h4>
    </nav>
  );
}

export default Navbar;
