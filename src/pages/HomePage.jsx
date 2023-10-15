import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { WEBLINKS } from "../const/WebLinks";
import PopOutImage from "../components/PopOutImage";

export default function HomePage() {
  useEffect(() => {
    document.title = "Hung's Portfolio"
  }, []);
  return <div>
    <section className="home">
      <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Dao Bui Quang Hung</h1>
        <p>I am a Web Developer.</p>

        <div className="links-icons mt-4">
          <a href={WEBLINKS.GITHUB} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href={WEBLINKS.LINKED_IN} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>


      <PopOutImage />
    </section>
  </div>;
}