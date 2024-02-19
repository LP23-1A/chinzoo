import Footersvg from "../components/Foodsvg";
import Navbar from "../components/Navbar";
import Data from "../components/Data"
import Footer from "../components/Footer";
import Hymdrl from "../components/Hymdrl";
import Undsenhool from "../components/Undsenhool";
import img from "../../../public/image 13.png"
import image     from "../../../public/image 14.png"

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
                <div className="w-[519px] h-[450px]">
                    <div className="flex">
                        <img className=" w-[443px] h-[438px] absolute" src="image 13.png"/>
                        <img className="relative left-[50%] top-[105px] w-[313px] h-[313px]" src="image 14.png"/>
                    </div>
                </div>
                <div className="w-[100%] h-[100vh] absolute">
                    <Footersvg/>
                </div>
            </div>
            <div className="w-[100%] h-fit flex justify-center items-center flex-col gap-[50px] py-[82px] bg-white">
                <div className="flex gap-[47px] justify-center">
                    <Data/>
                </div>
                <div className="flex flex-col gap-[80px]">
                    <div className="flex flex-col text-start">
                       <div className="flex justify-between py-[16px]">
                            <p className="text-black texts text-[22px] font-bold">Хямдралтай</p>
                            <p className="text-green-500">Бүгдийг харах</p>
                       </div>
                        <div className="flex gap-[47px]">
                            <Hymdrl/>
                        </div>
                    </div>
                    <div className="flex flex-col  justify-center">
                        <div className="flex justify-between py-[16px]">
                            <p className="text-black text-[22px] font-bold">Үндсэн хоол</p>
                            <p className="text-green-500">Бүгдийг харах</p>
                        </div>
                        <div className=" flex gap-[47px] justify-center">
                        <Undsenhool/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>           
        </div>
    )
}