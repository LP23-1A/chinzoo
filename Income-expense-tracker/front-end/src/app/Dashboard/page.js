'use client'
import Chip from "@/components/Chip"
import Iconblue from "@/components/Iconblue"
import Plus from "@/components/Plus"
import Shape from "@/components/Shape"
import Svg from "@/components/Svg"
import BarChart from "@/components/barchart"
import Link from "next/link"
import Pie from "@/components/Pie"


export default function Dashboard (){
    return(
        <div className="bg-white w-[100%] h-[100vh]">
            <nav className="flex justify-between pl-[120px] pr-[120px] pt-[15px] pb-[15px]">
                <div className="flex gap-[24px] items-center">
                    <Plus/>
                    <button className="text-black text-[16px] font-bold">Dashboard</button>
                    <Link href="/Record">
                        <button className="text-black text-[16px]">Record</button>
                    </Link>
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
            <section className="bg-[#efeff5] w-[100%] h-[100vh] pl-[120px] pr-[120px] pt-[32px] flex flex-col gap-[32px] ">
                <div className="flex justify-between">
                    <div className="bg-[#0166FF] rounded-[20px] relative flex flex-col px-[30px] py-[30px] justify-between w-[424px] h-[249px]">
                        <Iconblue/>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-white">Cash</p>
                                <p className="text-white text-[24px]">10'000'0</p>
                            </div>
                            <Chip/>
                        </div>
                        <Shape/>
                    </div>
                    <div className="w-[424px] h-[249px] rounded-[20px] bg-white flex flex-col justify-center">
                        <div className="flex items-center px-[30px] gap-[5px] py-[10px] border-b-1 border-black">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#84CC16"/>
                                </svg>
                            </span>
                            <p className="text-black">Your Income</p>
                        </div>
                        <div className="px-[30px] py-[24px] flex flex-col gap-[20px]">
                            <div>
                                <p className="text-[36px] text-black">1'200'000₮</p>
                                <p className="text-black">Your Income Amount</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z" fill="#84CC16"/>
                                    </svg>
                                </span>
                                <p className="text-black">32% from last month</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[424px] h-[249px] rounded-[20px] bg-white flex flex-col justify-center">
                        <div className="flex items-center px-[30px] py-[10px] gap-[5px] border-b-1 border-black">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#84CC16"/>
                                </svg>
                            </span>
                            <p className="text-black">Your Income</p>
                        </div>
                        <div className="px-[30px] py-[24px] flex flex-col gap-[20px]">
                            <div>
                                <p className="text-[36px] text-black">1'200'000₮</p>
                                <p className="text-black">Your Income Amount</p>
                            </div>
                            <div className="flex items-center gap-[5px]">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM15.5306 11.7806C15.461 11.8504 15.3783 11.9057 15.2872 11.9434C15.1962 11.9812 15.0986 12.0006 15 12.0006C14.9014 12.0006 14.8038 11.9812 14.7128 11.9434C14.6218 11.9057 14.539 11.8504 14.4694 11.7806L12.75 10.0603V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0603L9.53063 11.7806C9.3899 11.9214 9.19903 12.0004 9 12.0004C8.80098 12.0004 8.61011 11.9214 8.46938 11.7806C8.32865 11.6399 8.24959 11.449 8.24959 11.25C8.24959 11.051 8.32865 10.8601 8.46938 10.7194L11.4694 7.71937C11.539 7.64964 11.6218 7.59432 11.7128 7.55658C11.8038 7.51884 11.9014 7.49941 12 7.49941C12.0986 7.49941 12.1962 7.51884 12.2872 7.55658C12.3783 7.59432 12.461 7.64964 12.5306 7.71937L15.5306 10.7194C15.6004 10.789 15.6557 10.8717 15.6934 10.9628C15.7312 11.0538 15.7506 11.1514 15.7506 11.25C15.7506 11.3486 15.7312 11.4462 15.6934 11.5372C15.6557 11.6283 15.6004 11.711 15.5306 11.7806Z" fill="#84CC16"/>
                                    </svg>
                                </span>
                                <p className="text-black">32% from last month</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="flex justify-between">
                    <BarChart/>
                    <Pie/>
                </div>
            </section>
        </div>
    )
}