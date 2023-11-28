import Itms from "@/components/itms"

export default function Skils(){
    return(
       <div className="flex p-[80px]">
            <div className="container flex flex-col gap-[48px]">
                <div className="flex flex-col justify-center items-center gap-[16px]">
                    <button className="bg-zinc-300 p-[8px] rounded-[8px] ">skills</button>
                    <p>The skills, tools and technologies I am really good at:</p>
                </div>
                <div className="flex flex-wrap gap-[100px] justify-center">
                    <Itms/>
                </div>
            </div>
       </div>
    )
}