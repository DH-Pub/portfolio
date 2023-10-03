import "./NavBar.css";
import {
  HiMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineX,
} from "react-icons/hi";

export default function NavBar() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Hung
      </a>

      <input id="menu" type="checkbox" />
      <label htmlFor="menu" className="icon">
        <HiMenu id="menu-open" />
        <HiOutlineX id="menu-close" />
      </label>

      <nav className="navbar">
        <button className="items-center">
          <HiOutlineMoon />
        </button>
        <button className="items-center">
          <HiOutlineSun />
        </button>
        {/* style="--i:0" */}
        <a href="/#start" style={{ "--drop-delay": 0 }}>
          Start
        </a>
        <a href="/#about" style={{ "--drop-delay": 1 }}>
          About
        </a>
        <a href="/#services" style={{ "--drop-delay": 2 }}>
          Services
        </a>
        <a href="/#skills" style={{ "--drop-delay": 2 }}>
          Skills
        </a>
        <a href="/#contact" style={{ "--drop-delay": 3 }}>
          Contact
        </a>
      </nav>
    </header>
  );
}
