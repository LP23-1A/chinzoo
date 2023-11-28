import Experimage from "./Experimage"
import Button from "./button"

export default function Work(){
    return(
        <div className="flex p-[80px] ">
            <div className="work-container">
                <div className="flex flex-col justify-center items-center gap-[16px]">
                    <button className="bg-black text-white p-[8px] rounded-[4px]">Work</button>
                    <h3>Some of the noteworthy projects I have built:</h3>
                </div>
                <div className="flex">
                    <div className="work-1-1">
                        <Experimage/>
                    </div>
                    <div className="w-[576px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]">
                            <Button/>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="work-1-2">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px] "> 
                            <Button/>
                        </div>
                   </div>
                    <div className="work-1-1">
                        <Experimage/>
                    </div>
                </div>
            </div>
        </div>
    )
}