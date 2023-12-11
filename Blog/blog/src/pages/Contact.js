import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Contact () {
 
    return (
       <div className="flex flex-col justify-between items-center h-[fit]">
        <Navbar/>
            <div className="w-[895px] h-[895px] border m-[100px] flex flex-col justify-center items-center">
                <div className="px-[10px] pt-[14px] w-[769px] h-[389px] flex flex-col justify-center items-center">
                    <div className="flex flex-col  w-[624px] h-[163px]">
                        <h1 className="text-[36px] font-bold">Contact Us</h1>
                        <p className="text-[16px] text-[#696A75]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="flex gap-[54px] justify-center">
                        <div className="w-[294px] h-[133px] p-[16px] border rounded-[12px] flex flex-col justify-between text-[#696A75]">
                            <h1 className="font-bold text-black text-[24px]">Address</h1>
                            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                        <div className="w-[294px] h-[133px] p-[16px] border rounded-[12px] flex flex-col gap-[12px] text-[#696A75]">
                            <h1 className="font-bold text-black text-[24px]">Contact</h1>
                            <p>313-332-8662 info@email.com</p>
                        </div>

                    </div>
                </div>
                <div className="w-[643px] rounded-[10px]  h-[440px] bg-[#DCDDDF] pt-[29px] pr-[130px] pb-[26px] pl-[35px] flex flex-col justify-around items-start">
                    <p className="text-[18px] font-bold">Leave a Message</p>
                    <div className="flex justify-between w-[100%]">
                        <input className="py-[14px] pl-[20px] pr-[14px]  rounded-[5px]" placeholder="Your Name"/>
                        <input className="py-[14px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Your Email"/>
                        
                    </div>
                    <input className="w-[100%] rounded-[5px] py-[14px] pl-[20px] pr-[14px]" placeholder="Subject"/>
                    <textarea className="w-[478px] h-[134px] py-[14px] pl-[20px] pr-[14px] rounded-[5px]" placeholder="Write a message"/>
                    <button className="bg-blue-600 text-white rounded-[8px] py-[10px] px-[16px] rounded-mdls">Send Message</button>
                </div>
            </div>
        <Footer/>
       </div>
    )
}