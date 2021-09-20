import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-nav-links">
          <ul className="header-menu">
              <a href="/"><li>Home</li></a>
              <a href="/sobre"><li>Sobre</li></a>
              <a href="/login"><li>Curso</li></a>
          </ul>
      </div>
    </nav>
  );
}

export default Header;
