import Experimage from "./Experimage"
import Button from "./button"

export default function Work(){
    return(

        <div className="flex p-[80px] justify-center flex-col">
            <div className="flex flex-col gap-[48px]">
                <div className="flex justify-center items-center flex-col gap-[16px]">
                    <button className="bg-zinc-300  p-[8px] rounded-[4px]">Work</button>
                    <h3>Some of the noteworthy projects I have built:</h3>
                </div>
               
                <div className="flex md:flex-wrap justify-center">
                    <div className="w-[576px] p-[48px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                    <div>
                        <Experimage/>
                    </div>
                </div>
                <div className="flex md:flex-wrap justify-center">
                    <div>
                        <Experimage/>
                    </div>
                    <div className="w-[576px] p-[48px]  ">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                </div>
                <div className="flex md:flex-wrap justify-center">
                    <div className="w-[576px] p-[48px]">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="flex gap-[8px]  flex-wrap"> 
                            <Button/>
                        </div>
                   </div>
                    <div>
                        <Experimage/>
                    </div>
                </div>
                
            </div>
            
           
        </div>
    )
}