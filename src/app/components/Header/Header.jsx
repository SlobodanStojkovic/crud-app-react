import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link className="crudApp" to="/">
          <span>CRUD App</span>
        </Link>
        <div className="links">
          <Link to="/"> Home </Link>
          <Link to="/create"> Create blog</Link>
        </div>
      </nav>
    </header>
  );
};
