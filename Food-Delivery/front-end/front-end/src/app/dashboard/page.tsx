import Footersvg from "../components/Foodsvg";
import Navbar from "../components/Navbar";
import Data from "../components/Data"
import Footer from "../components/Footer";

export default function Dashboard () {
    return(
        <div>
            <Navbar/>
            <div className="w-[100%] h-[100vh] bg-[#18BA51] flex justify-around items-center px-[100px]">
                <div className="h-[225px] w-[384px]">
                    <div>
                        <p className="text-[55px] m-0">Pinecone Food delivery</p>
                    </div>
                    <p className="text-[22px]">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="w-[588px] h-[438px] border-2 border-red-500">
                    <div>

                    </div>
                </div>
                <div className="w-[100%] h-[100vh] absolute">
                    <Footersvg/>
                </div>
            </div>
            <div className="w-[100%] h-[100vh] bg-white">
                <div className="flex gap-[47px] justify-center">
                    <Data/>
                </div>

            </div>
            <Footer/>
            
        </div>
    )
}