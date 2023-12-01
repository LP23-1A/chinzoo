import Experimage from "./Experimage"
import Button from "./button"

export default function Work(){
    return(

        <div className="flex p-[80px] justify-center flex-col">
            <div className="flex flex-col gap-[48px] justify-center items-center">
                <div className="flex justify-center items-center flex-col gap-[16px]">
                    <button className="bg-zinc-300  p-[8px] rounded-[4px] dark:bg-[#374151]">Work</button>
                    <h3>Some of the noteworthy projects I have built:</h3>
                </div>
               
                <div className="flex justify-center w-[1152px] dark:bg-[#1F2937] rounded-xl">
                    <div className="w-[576px] p-[48px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                    <div className="dark:bg-[#374151] p-[48px] w-[576px]">
                        <Experimage/>
                    </div>
                </div>
                <div className="flex justify-center w-[1152px] dark:bg-[#1F2937]">
                    <div className="dark:bg-[#374151] p-[48px] w-[576px]">
                        <Experimage/>
                    </div>
                    <div className="w-[576px] p-[48px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                </div>
                <div className="flex justify-center w-[1152px] dark:bg-[#1F2937]">
                    <div className="w-[576px] p-[48px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                    <div className="dark:bg-[#374151] p-[48px] w-[576px]">
                        <Experimage/>
                    </div>
                </div>
                
                
                
            </div>
            
           
        </div>
    )
}