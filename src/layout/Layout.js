import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Layout.css";
import { Component } from "react";

class Layout extends Component {
  componentDidMount() {
    let navHeight =
      document.querySelector(".header")?.clientHeight + "px" || "5rem";
    document.querySelector("main").style.marginTop = navHeight;
    document.documentElement.style.setProperty("--scroll-padding", navHeight);
  }
  render() {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    );
  }
}

export default Layout;
