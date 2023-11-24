import Icons from "@/components/Icons"
import Call from "./call"
import Sc from "./Sc"
export default function Contact(){
    return(
        <div className="contact">
            <div className="contact-1">
                <button>Get in touch</button>
                <p>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div>
            <div className="contact-2">
                <button><Icons/></button>
                <h2>reachsagarshah@gmail.com</h2>
                <button><Sc/></button>
            </div>
            <div className="contact-2">
                <button><Call/></button>
                <h1>+91 8980500565</h1>
                <button><Sc/></button>
            </div>
            </div>
            <div>

            </div>
        </div>
    )
}