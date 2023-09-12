import { HiMenu } from "react-icons/hi";

export default function NavBar() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Hung
      </a>

      <label className="icon">
        <HiMenu />
      </label>

      <nav className="navbar">
        <a href="/#">Start</a>
        <a href="/#">Work</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>
      </nav>
    </header>
  );
}
