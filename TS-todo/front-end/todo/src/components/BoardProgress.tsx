import Card from "./Card"
import Button from "./Button"


export default function BoardProgress (){
    return(
    <div className="w-[350px] bg-gray-200 h-fit p-[20px] rounded-[10px] flex flex-col gap-2">
        <div className="flex items-center justify-between">
            <div className="flex gap-[10px] items-center">
                <span className="w-[10px] h-[10px] rounded-[50%] bg-[#0037ff]"></span>
                <p>In Progress</p>
            </div>
            <span className="text-start">...</span>
        </div>
        <Card/>
        <Button/>
    </div>
    )
}