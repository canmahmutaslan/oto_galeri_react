import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div>
        <h2>ASLAN OTOMOTİV</h2>
      </div>

      <ul>
        <li>
          <NavLink to="/">Ana Sayfa</NavLink>
        </li>

        <li>
          <NavLink to="/araclar">Araçlar</NavLink>
        </li>

        <li>
          <NavLink to="/hizmetler">Hizmetler</NavLink>
        </li>

        <li>
          <NavLink to="/hakkimizda">Hakkımızda</NavLink>
        </li>

        <li>
          <NavLink to="/iletisim">İletişim</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;