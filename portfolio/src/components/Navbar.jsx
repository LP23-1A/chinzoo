import Svg from "@/components/Svg";
import Logo from "@/components/logo"
export default function Navbar() {
  return (
    <header>
      <div><Logo/></div>
      <div className="navi">
        <ul >
          <li>about</li>
          <li>work</li>
          <li>testimonials</li>
          <li>contact</li>
        </ul>
       <div className="buttons">
        <button className="sun"><Svg/></button>
        <button className="dwbtn">download CV</button>
       </div>
      </div>
    </header>
  );
}
