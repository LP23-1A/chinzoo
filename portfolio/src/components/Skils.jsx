import Itms from "@/components/itms"

export default function Skils(){
    return(
       <div className="skill">
            <div className="container">
                <div className="sadge">
                    <button>skills</button>
                    <p>The skills, tools and technologies I am really good at:</p>
                </div>
                <div className="imts">
                    <Itms/>
                </div>
            </div>
       </div>
    )
}