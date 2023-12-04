import Headlogo from "@/components/Icon/Headlogo"
import SearchIcon from "./Icon/SearchIcon"

export default function Navbar(){
    return(
        <div className="flex justify-between items-center h-[100px] pl-[350px] pr-[350px]">
            <Headlogo/>
                <div className="flex gap-[21px] justify-center items-center">
                    <ul className=" flex w-[667px]  justify-center gap-[40px]">
                        <li>Home</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div className="border pt-[8px] pb-[8px] flex pl-[16px] pr-[8px] gap-[12px]">
                            <input className=""type="search" name="" id="" placeholder="search"/>
                            <button><SearchIcon/></button>
                    </div>
                </div>
        </div>
    )
}