import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/React-cocktailSearch">
          <h2 className="logo">Cocktails Flambe</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/React-cocktailSearch">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
