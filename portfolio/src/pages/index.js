import Navbar from "@/components/navbar";
import Hero from "@/components/Hero"
import Svg from "@/components/Svg";
import About from "@/components/About";
import Skils from "@/components/skils";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { useState } from "react";
export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const clickHandler = () => {
    setIsDark(!isDark);
    console.log('jambaa lalar');
  };

  return (
    <section>
      <button onClick={clickHandler} className="darkmode">
        dark mode
      </button>
      <Navbar />
      <Hero />
      <About />
      <br />
      <Skils />
      <Experience />
      <Work />
      <Contact />
    </section>
  );
}






// export default function Home() {

//   const [isDark, setIsDark] = useState{false}

//    const clickHandler = {} => {
//     setIsDark(isDark)
//    }
//   return (
//     <section>
//       <Navbar />
//       <Hero/>
//       <About/>
//       <button onClick={clickHandler} className="darkmode">dark mode</button>
//       <br/>
//       <Skils/>
//       <Experience/>
//       <Work/>
//       <Contact/>
//     </section>
//   );
// }
