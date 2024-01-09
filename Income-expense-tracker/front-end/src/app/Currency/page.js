import Icon from "@/components/Iconn"
import Money from "@/components/Money"
import Link from "next/link"


export default function Currency () {
    return(
        <div  className="flex justify-center items-center w-[100%] h-[100vh] gap-[141px] flex-col bg-white">
            <div className="mt-[40px] flex flex-col gap-[48px]">
                <Icon/>
                <div>
                    <ul className="steps">
                        <li className="step step-primary">currency</li>
                        <li className="step step-primary">finish</li>
                    </ul>
                </div>
            </div>
            <div  className="flex justify-center items-center w-[100%] h-[100vh] flex-col bg-white gap-[32px] mb-[399px]">
                <div className="flex flex-col gap-[24px]">
                    <div className="flex justify-center items-center flex-col">
                        <div className="w-[48px] h-[48px] rounded-full bg-[#0166FF] flex justify-center items-center">
                            <Money/> 
                        </div>
                        <p className="text-black text-[24px]">Select base currency</p>
                    </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <select className="select select-bordered bg-white text-black">
                            <option disabled selected>сонгоно уу</option>
                            <option>MNT - Mongolian Tugrug</option>
                            <option>USD - AMERICAN DOLLAR</option>
                        </select>
                            <div className="label">
                                <span className="label-text-alt">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </span>
                            </div>
                        </label>
                </div>
           </div>
           <Link href="/Finish">
           <button className="bg-[#0166FF] text-white w-[384px] h-[48px] rounded-[20px]">Confirm</button>
           </Link>  
            </div>
        </div>
    )
}