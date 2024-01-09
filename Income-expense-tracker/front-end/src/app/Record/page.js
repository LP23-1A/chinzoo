import Plus from "@/components/Plus"
import Svg from "@/components/Svg"
import Link from "next/link"

export default function Record(){
    return(
        <div className="bg-white w-[100%] h-[100vh]">
            <nav className="flex justify-between pl-[120px] pr-[120px] pt-[15px] pb-[15px]">
                <div className="flex gap-[24px] items-center">
                    <Plus/>
                   <Link href="/Dashboard">
                    <button className="text-black text-[16px]  ">Dashboard</button>
                   </Link>
                    <button className="text-black text-[16px] font-bold">Record</button>
                </div>
                <div>
                    <button className="flex bg-[#0166FF] text-white w-[99px] h-[32px] rounded-[20px] justify-center items-center gap-[4px]">
                    <Svg/>
                    Record
                    </button>
                    
                </div>
            </nav>
            <section className="w-[894]  bg-[#efeff5] flex pr-[120px] pl-[120px] justify-between px-[24px] py-[24px]">
                <div className="h-[100vh] bg-white w-[282px] border-1 py-[24px] px-3">
                    <div>
                        <p className="text-[24px] text-black">Records</p>
                        <button className="w-[100%] h-[32px] bg-[#0166FF] text-white rounded-[20px]">+ Add</button>
                    </div>
                    <input className=""/>
                </div>
                <div className="w-[1094px] h-[100vh] bg-white">

                </div>
            </section>
        </div>
    )
}