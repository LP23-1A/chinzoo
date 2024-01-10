'use client'
import Category from "@/components/Category"
import Plus from "@/components/Plus"
import Range from "@/components/Range"
import Svg from "@/components/Svg"
import Link from "next/link"
import Payments from "@/components/Payments"

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
                <div className="flex items-center gap-4">
                    <button className="flex bg-[#0166FF] text-white w-[99px] h-[32px] rounded-[20px] justify-center items-center gap-[4px]">
                    <Svg/>
                    Record
                    </button>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    
                </div>
            </nav>
            <section className="w-[894]  bg-[#efeff5] flex pr-[120px] pl-[120px] justify-between px-[24px] py-[24px]">
                <div className="h-[100vh] bg-white w-[282px] border-1 py-[24px] px-3 flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[24px]">
                        <p className="text-[24px] text-black">Records</p>
                        <button className="btn text-white bg-[#0166FF] h-[32px] border-none gap-0 hover:bg-[#0166FF]">+ Add</button>
                    </div>
                    <input className="bg-gray-100 border-solid px-[10px] py-[5px] w-[100%] rounded-[8px]" type="search" placeholder="search"/>
                    <div className="flex flex-col gap-[16px]">
                        <p className="text-black text-[16px] font-bold">Types</p>
                        <div className="flex flex-col px-[10px]">
                            <div className="form-control gap-[20px]">
                                <label className=" flex  items-center gap-[10px] cursor-pointer">
                                    <input type="checkbox"  className="checkbox" />
                                    <span className="text-black">All</span> 
                                </label>
                                <label className=" flex  items-center gap-[10px] cursor-pointer">
                                    <input type="checkbox"  className="checkbox" />
                                    <span className="text-black">Income</span> 
                                </label>
                                <label className=" flex  items-center gap-[10px] cursor-pointer">
                                    <input type="checkbox"  className="checkbox" />
                                    <span className="text-black">Expence</span> 
                                </label>
                            </div>
                        </div>
                        <Category/>
                        <Range/>
                    </div>
                </div>
                <div className="w-[1094px] h-[100vh]">
                        <Payments/>

                </div>
            </section>
        </div>
    )
}