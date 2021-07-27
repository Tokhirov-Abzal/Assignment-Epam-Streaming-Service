import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <i className="icon fas fa-play"></i>
      </Link>

      <ul className="nav-links">
        <Link className="linkItem" to="/">
          <li>Home</li>
        </Link>
        <Link className="linkItem" to="/about">
          <li>About</li>
        </Link>
        <button>Sign In</button>
      </ul>
    </div>
  );
};

export default Navbar;