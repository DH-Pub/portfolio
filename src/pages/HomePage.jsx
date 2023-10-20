import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import { WEBLINKS } from "../const/WebLinks";
import PopOutImage from "../components/PopOutImage";

export default function HomePage() {
  useEffect(() => {
    document.title = "Hung's Portfolio"
  }, []);
  return <div>
    <section className="home" id="start">
      <div className="home-content">
        <h3>Hello, I'm</h3>
        <h1>Dao Bui Quang Hung</h1>
        <p>I'm a Web Developer.</p>

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

    <section className="about" id="about">
      <div className="about-content">
        <p>I am an aspiring web developer with a flair for turning creative ideas into interactive online experiences. I am committed to crafting visually appealing and user-friendly websites. I am eager to tackle new challenges and improve my knowledge.</p>
      </div>
    </section>
  </div>;
}