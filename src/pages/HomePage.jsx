import { useEffect } from "react";
import NavBar from "../layout/NavBar";

export default function HomePage() {
  useEffect(() => {
    document.title = "Hung's Portfolio"
  }, []);
  return <div>
    <NavBar />
  </div>;
}