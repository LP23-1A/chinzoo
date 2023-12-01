import Git from "./git";
import Twitter from "./twitter";
import Loc from "./Loc";
import Figma from "./figma";
import Heroimg from "./Heroimg";

export default function Hero() {
  return (
    <div className="container flex gap-8 text-center md:text-left p-[80px] max-w-7xl">
      <div className="flex flex-col gap-[48px]">
        <div>
          <h1 className="text-[60px] font-semibold">
            Hi, I’m Sagar 👋
          </h1>
          <br />
          <p className=" w-2/3">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
            <div className="flex">
              <Loc />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex items-center">
              <button className="bg-green-400 w-[10px] h-[10px] rounded-[50%] m-[6.5px]"></button>
              <p>Available for new projects</p>
            </div>
        </div>
        <div className="icons flex gap-[10px]">
          <Git />
          <Twitter />
          <Figma />
        </div>
      </div>
      <div className="relartive">
        <div className="w-[280px] h-[320px] bg-[#E5E7EB] relative left-10  "></div>
        <Heroimg />
      </div>
    </div>
  );
}
