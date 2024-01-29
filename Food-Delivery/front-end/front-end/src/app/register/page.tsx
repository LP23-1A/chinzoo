import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../components/Register";
export default function  register () {
    return(
       <div>
            <div className="flex w-[100%]">
                <Navbar/>
            </div>
            <div className=" h-[62vh] bg-white w-[100%] flex justify-center items-center">
               <Register/>
            </div>
            <Footer/>
       </div>
    )
}