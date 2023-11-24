import Navbar from "@/components/navbar";
import Hero from "@/components/Hero"
import Svg from "@/components/Svg";
import About from "@/components/About";
import Skils from "@/components/skils";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero/>
      <About/>
      <br/>
      <Skils/>
      <Experience/>
      <Work/>
      <Contact/>
    </section>
  );
}
