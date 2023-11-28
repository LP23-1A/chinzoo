import Navbar from "@/components/navbar";
import Hero from "@/components/Hero"
import Svg from "@/components/Svg";
import About from "@/components/About";
import Skils from "@/components/skils";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { useState } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const clickHandler = () => {
    console.log(sda);
  }
  const Darktheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`body max-w-[1440px] justify-center items-center m-auto ${isDark ? 'black-theme bg-black' : ''}`}>
      <section className={`container flex flex-col justify-center ${isDark ? 'bg-black' : ''}`}>
        <Navbar Darktheme={Darktheme} isDark={isDark}/>
        <Hero />
        <About />
        <Skils />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
// export default function Home() {
//   const clickHandler = () => {
//      const [isDark, setIsDark] = useState(false)
//     const Darktheme = () => {
//       setIsDark(!isDark)
//   };
// }

//   return (
//    <div className={`body w-[100%] flex flex-col items-center justify-center" ${isDark && `black-theme bg-black`}`} >
//      <section className={`"navi" ${isDark && `bg-black`}`}>
//         <Navbar  Darktheme={Darktheme} isDark={isDark}/>
//         <Hero />
//         <About />
//         <Skils />
//         <Experience />
//         <Work />
//         <Contact />
//         <Footer/>
//     </section>
//    </div>
//   );
// }

