import Headlogo from "@/components/Icon/Headlogo"
import SearchIcon from "./Icon/SearchIcon"
import { useRouter } from "next/router"


export default function Navbar(){
    const router = useRouter()
    const contact = () => {
        router.push('/Contact')
    }
    const Home = () => {
        router.push('/Home')
    }
    return(
        <div className="flex justify-center items-center h-[100px]  gap-[118px]">
            <Headlogo/>
                <div className="flex gap-[21px] justify-center items-center">
                    <ul className=" flex w-[667px]  justify-center gap-[40px]">
                        <li onClick={Home} className=" cursor-pointer">Home</li>
                        <li className=" cursor-pointer">Blog</li>
                        <li className=" cursor-pointer" onClick={contact}>Contact</li>
                    </ul>
                    <div className="rounded-[8px] pt-[8px] pb-[8px] bg-[#F4F4F5] flex pl-[16px] pr-[8px] gap-[12px]">
                            <input className="bg-[#F4F4F5] p-[5px]"type="search" name="" id="" placeholder="search"/>
                            <button ><SearchIcon/></button>
                    </div>
                </div>
        </div>
    )
}