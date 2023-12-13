import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function () {
    const router = useRouter()
    const Home = () => {
        router.push('/Home')
    }
    return(
        <main className="flex flex-col w-[100%] h-[100vh] justify-between items-center">
            <Navbar/>
                <div className=" w-[642px] h-[208px]">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[72px]">404</p>
                        </div>
                        <div className="w-[px] h-[150px] border"></div>
                        <div className="w-[392px] h-[188px] py-[8px] flex flex-col items-start justify-between">
                            <h1 className="text-[24px] font-bold">Page not found</h1>
                            <p className="text-[#696A75]">We're sorry, This page is unknown or does not exist the page you are looking for.</p>
                            <button onClick={Home} className="bg-blue-600 text-white rounded-[8px] py-[10px] px-[16px] rounded-mdls">Back to home</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </main>
    )
}