import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";
import {
  HiMenu,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineX,
} from "react-icons/hi";
import { selectUiMode, setMode } from "../store";

export default function NavBar() {
  const dispatch = useDispatch();
  const uiMode = useSelector(selectUiMode);
  let uiModeButton = <HiOutlineMoon />;

  const handleModeChange = () => {
    if (uiMode === "dark") {
      dispatch(setMode("light"));
    } else if (uiMode === "light") {
      dispatch(setMode("dark"));
    }
  };

  if (uiMode === "light") {
    uiModeButton = <HiOutlineMoon />;
  } else if (uiMode === "dark") {
    uiModeButton = <HiOutlineSun />;
  }

  return (
    <header className="header">
      <a href="/" className="logo">
        Hung
      </a>

      <button className="items-center ui-mode" onClick={handleModeChange}>
        {uiModeButton}
      </button>
      
      <input id="menu" type="checkbox" />
      <label htmlFor="menu" className="icon">
        <HiMenu id="menu-open" />
        <HiOutlineX id="menu-close" />
      </label>

      <nav className="navbar">
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
