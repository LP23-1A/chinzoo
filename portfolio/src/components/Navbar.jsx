import Svg from "@/components/Svg";
import Logo from "@/components/logo"
export default function Navbar() {
  return (
    <header className=" flex bg-blue">
      <div><Logo/></div>
      <div className="navi flex justify-between">
        <ul className=" flex">
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
