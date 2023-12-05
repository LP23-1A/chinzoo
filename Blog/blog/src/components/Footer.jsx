import SearchIcon from "./Icon/SearchIcon"
import Socialicon from "./Icon/Socialicon"

export default function Footer () {
    return(
        <div className="w-[100%] h-[495px] bg-[#E8E8EA] pt-[64px] pl-[352px] pr-[352px]">
            <div className="w-[100%] h-[100%] flex flex-col justify-between  bg-red-200 gap-[20px]">
                <div className=" flex items-start justify-between">
                    <div className="flex flex-col h-[236px] w-[289px] justify-between">
                        <div className="flex flex-col gap-[12px]">
                            <h1>About</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        </div>
                        <div>
                            <p>Email : info@jstemplate.net</p>
                            <p>Phone : 880 123 456 789</p>
                        </div>
                    </div>
                    <div className="w-[521px] flex justify-center border">
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="">
                        <Socialicon/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}