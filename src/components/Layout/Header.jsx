import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="h1__container">
          <Link to="/">
            <h1 className="h1">Cozy House</h1>
          </Link>
          <div className="paragraph">Shelter for pets in Boston</div>
        </div>
        <nav className="nav">
          <NavLink to="/" className="nav__link">
            About the shelter
          </NavLink>
          <NavLink to="/pets" className="nav__link">
            Our pets
          </NavLink>
          <NavLink to="/help" className="nav__link">
            Help the shelter
          </NavLink>
          <NavLink to="/contacts" className="nav__link">
            Contacts
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export { Header };
