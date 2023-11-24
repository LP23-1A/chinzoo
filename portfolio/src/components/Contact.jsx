import Icons from "@/components/Icons"
import Call from "./call"
import Sc from "./Sc"
import Figma from "./figma"
import Git from "./git"
import Twitter from "./twitter"
export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-1">
                <button className="conbutt">Get in touch</button>
                <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="cont-2">
                <div className="contact-2">
                     <Icons/>
                    <h2>reachsagarshah@gmail.com</h2>
                     <Sc/>
                </div>
                <div className="contact-2">
                     <Call/>
                     <h1>+91 8980500565</h1>
                      <Sc/>
                 </div>
            </div>
             <div className="contact-3">
                <p>You may also find me on these platforms!</p>
                <div className="icbt">
                <Git/>
                 <Twitter/>
                <Figma/>
                </div>
            </div>
        </div>
    )
}