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
                <button>Get in touch</button>
                <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div>
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
                <p>You may also find me on these platforms!</p>
                <div>
                    <Git/>
                    <Twitter/>
                    <Figma/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}