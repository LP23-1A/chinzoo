import Headlogo from "@/components/Icon/Headlogo"
import SearchIcon from "./Icon/SearchIcon"
import { useRouter } from "next/router"


export default function Navbar(){
    const router = useRouter()
    const contact = () => {
        router.push('/Contact')
    }
    return(
        <div className="flex justify-center items-center h-[100px]  gap-[118px]">
            <Headlogo/>
                <div className="flex gap-[21px] justify-center items-center">
                    <ul className=" flex w-[667px]  justify-center gap-[40px]">
                        <li className=" cursor-pointer">Home</li>
                        <li className=" cursor-pointer">Blog</li>
                        <li className=" cursor-pointer" onClick={contact}>Contact</li>
                    </ul>
                    <div className="border pt-[8px] pb-[8px] flex pl-[16px] pr-[8px] gap-[12px]">
                            <input className="p-[5px]"type="search" name="" id="" placeholder="search"/>
                            <button ><SearchIcon/></button>
                    </div>
                </div>
        </div>
    )
}