import CarsouleImg from "./Icon/CarsouleImg"
import Arrow from "./Icon/Arrow"

const data = [
    {
        category: "technology",
        title: "Grid system for better Design User Interface",
        date: "August 20, 2022",
    }
]

export default function Carsoule () {
    return(
       <div className="flex w-[1216px] h-[600px] flex-col items-center justify-center relative gap-3 bg-cover rounded-[8px] bg-[url(https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]">
         
           <>
            {
                data.map((el) =>{
                    return(
                        <div className="bg-white w-[598px] h-[252px] p-[40px] absolute left-0 bottom-0 flex flex-col justify-between items-start rounded-[8px] m-[12px] ">
                            <button className="bg-blue-600 text-white rounded-[8px] p-[4px] rounded-mdls">{el.category}</button>
                            <h1 className="text-[36px] font-bold">{el.title}</h1>
                            <p className="text-[16px] text-[#97989F]">{el.date}</p>
                        </div>
                    )
                } )
            }
           </>
          
       </div>
    )
}