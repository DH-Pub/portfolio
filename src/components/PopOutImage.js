import "./PopOutImage.css";

export default function PopOutImage() {
  return (
    <div>
      <div className="portrait-container">
        <div className="portrait-circle"></div>
        <img
          src="/images/self-portrait-2.png"
          alt="portrait"
          className="person-img"
        />
      </div>
    </div>
  );
}
