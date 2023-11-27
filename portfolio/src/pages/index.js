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
  const clickHandler = () => {
     const [isDark, setIsDark] = useState(false)
    const Darktheme = () => {
      setIsDark(!isDark)
  };
}

  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Skils />
      <Experience />
      <Work />
      <Contact />
      <Footer/>
    </section>
  );
}

