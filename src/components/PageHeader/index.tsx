import "./styles.css";
import logo from "../../assets/logo.png";

function PageHeader() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navLinks">
          <ul className="menu">
              <a href="/"><li className="links">Home</li></a>
              <a href="/sobre"><li className="links">Sobre</li></a>
              <a href="/plataforma"><li className="links">Curso</li></a>
          </ul>
      </div>
    </nav>
  );
}

export default PageHeader;
