import Icons from "@/components/Icons"
import Call from "./call"
import Sc from "./Sc"
import Figma from "./figma"
import Git from "./git"
import Twitter from "./twitter"
export default function Contact(){
    return(
        <div className="flex flex-col justify-center items-center p-[80px]">
            <div className="flex  flex-col justify-center items-center gap-[16px]">
                <button className="bg-zinc-300 p-[8px] rounded-[8px]" >Get in touch</button>
                <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="flex flex-col gap-[48px]">
               <div>
               <div className="flex justify-center items-center gap-[20px]">
                        <Icons/>
                    <h1 className="text-[30px]">reachsagarshah@gmail.com</h1>
                        <Sc/>
                </div>
                <div className="flex justify-center items-center gap-[20px]">
                        <Call/>
                    <h1 className="text-[30px]">+91 8980500565</h1>
                        <Sc/>
                </div>
               </div>
                <div className="flex flex-col justify-center items-center gap-[8px]">
                    <p>You may also find me on these platforms!</p>
                    <div className="flex justify-center">
                        <Git/>
                        <Twitter/>
                        <Figma/>
                    </div>
                </div>
            </div>
        </div>
    )
}