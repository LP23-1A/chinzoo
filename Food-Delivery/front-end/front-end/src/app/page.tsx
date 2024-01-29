import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="flex w-[100%]">
        <Navbar/>
      </div>
      <div className=" h-[62vh] bg-white w-[100%] flex justify-center items-center">
        <Login/>
      </div>
      <Footer/>
    </main>
  );
}
