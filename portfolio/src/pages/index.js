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
  const [isDark, setIsDark] = useState(false)
    const Darktheme = () => {
      setIsDark(!isDark)
      console.log('sda');
    }
  return (
    <div className={`body max-w-[1440px]  justify-center items-center m-auto ${isDark && `bg-black text-black`}`}>
      <section className={`container flex flex-col justify-center w-full px-4 md:max-w-[1280px] md:mx-auto max-w-3xl ${isDark && `black-theme bg-black text-white`}`}>
        <Navbar  Darktheme={Darktheme} isDark={isDark}/>
        <Hero  />
        <About  Darktheme={Darktheme} isDark={isDark} />
        <Skils/>
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

