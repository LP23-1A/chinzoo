import Svg from "@/components/Svg";
import Logo from "@/components/logo"
export default function Navbar() {
  return (
    
    <header className="w-full flex justify-between p-[80px]">
      <div><Logo/></div>
      <div className="flex justify-center items-center padding-[16px] gap-[24px]">
        <ul className=" flex justify-center items-center gap-[24px]">
          <li>about</li>
          <li>work</li>
          <li>testimonials</li>
          <li>contact</li>
        </ul>
       <div className="flex items-center gap-[16px]">
        <button className="sun"><Svg/></button>
        <button className=" bg-zinc-300 p-[8px] rounded-[8px]">download CV</button>
       </div>
      </div>
    </header>
  );
}
