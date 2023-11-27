import Git from "./git";
import Twitter from "./twitter";
import Loc from "./Loc";
import Figma from "./figma";
import Heroimg from "./Heroimg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="text">
        <div>
          <h1>Hi, I’m Sagar 👋</h1>
          <br />
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>
          <div className="sd">
            <Loc />
            <p>Ahmedabad, India</p>
          </div>
          <div className="proj">
            <button className="dot"></button>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="icons">
          <Git />
          <Twitter />
          <Figma />
        </div>
      </div>
      <div className="imgsec">
        <div className="gray"></div>
        <Heroimg />
      </div>
    </div>
  );
}
