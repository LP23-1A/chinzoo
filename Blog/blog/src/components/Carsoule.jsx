import CarsouleImg from "./Icon/CarsouleImg"
import Arrow from "./Icon/Arrow"
export default function Carsoule () {
    return(
       <div className="flex flex-col items-center justify-center relative gap-3">
            <CarsouleImg/>
            <div className="border p-[40px] w-[598px] h-[252px] bg-white absolute left-[20px] top-[330px] rounded-[8px]">
                <button className="bg-blue-600 text-white rounded-[8px] p-[4px] rounded-mdls">Technology</button>
                <h1 className="text-[36px]">
                    Grid system for better Design User Interface
                </h1>
                <p className="text-[16px] text-[#97989F]">
                    August 20, 2022
                </p>
            </div>
            <div className="flex flex-col justify-end items-end w-[1216px]">
                 <Arrow/>
            </div>
       </div>
    )
}