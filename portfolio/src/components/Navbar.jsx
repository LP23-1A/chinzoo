import Svg from "@/components/Svg";
import Logo from "@/components/logo"
import { useTheme } from "next-themes";

export default function Navbar({Darktheme}) {
  const { theme, setTheme } = useTheme()
  const ThemeToggle = () => {
    if (theme == "dark") {
      setTheme("light");
    }
    if (theme == "light" || theme == "system") {
      setTheme("dark");
    }
  }
  return (
   <header className="flex justify-between p-[80px]">
      <div><Logo/></div>
      <div className="flex justify-center items-center padding-[16px] gap-[24px]">
        <ul className=" flex justify-center items-center gap-[24px]">
          <li>about</li>
          <li>work</li>
          <li>testimonials</li>
          <li>contact</li>
        </ul>
       <div className="flex items-center gap-[16px]">
        <button className="" onClick={ThemeToggle} ><Svg/></button>
        <button className=" bg-zinc-300 p-[8px] rounded-[8px] dark:text-black">download CV</button>
       </div>
      </div>
      <div></div>
    </header>
  );
}