import { Link } from "react-router-dom";
import SplingLogo from "../assets/img/splingLogo.png";

export function Header() {
  return (
    <header>
      <nav className="nav naim flex">
        <Link to="/">
            <img src={SplingLogo} className="logo-img" alt="logo-img" />
        </Link>
      </nav>
    </header>
  );
}
