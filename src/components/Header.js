import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="imageContainer">
        <h1>Image</h1>
      </div>
      <ul className="navLinks">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          {" "}
          <li>About Us</li>
        </Link>
        <Link to="/contact-us">
          {" "}
          <li>Contact Us</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
