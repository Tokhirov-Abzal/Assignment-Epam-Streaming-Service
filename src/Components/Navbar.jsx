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
        <Link className="linkItem" to="/bookmark">
          <li>Bookmark</li>
        </Link>
        <button>Log in</button>
      </ul>
    </div>
  );
};

export default Navbar;
