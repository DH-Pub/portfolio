import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Hung's Portfolio"
  }, []);
  return <div>
    <section className="home">
      <div className="home-content select-none">
        <h3>Hello, I am</h3>
        <h1>Dao Bui Quang Hung</h1>
        <p>I am an aspiring web developer with a flair for turning creative ideas into interactive online experiences. I am committed to crafting visually appealing and user-friendly websites. I am eager to tackle new challenges and improve my knowledge.</p>
      </div>

      <div className="profession-container">
        <div className="profession-box">
          <div className="profession"></div>
        </div>
      </div>
    </section>
  </div>;
}