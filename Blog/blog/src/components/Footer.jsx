import SearchIcon from "./Icon/SearchIcon"
import Socialicon from "./Icon/Socialicon"
import Logo from "./Icon/Logo"

export default function Footer () {
    return(
        <div className="w-[100%] h-[495px] bg-[#E8E8EA] text-[#696A75] pt-[64px] pl-[352px] pr-[352px]">
            <div className="w-[100%] h-[100%] flex justify-center items-center flex-col gap-[20px]">
                <div className=" flex items-start gap-[30px] w-[1216px]">
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
                    <div className="w-[521px] flex justify-center border gap-[8px]">
                        <ul>
                            <li>Home</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    
                    <Socialicon/>
                
                </div>
                <div className="w-[1216px] h-[95px] pt-[32px] pb-[32px] flex border-t-[1px] flex justify-between">
                    <div className="flex gap-[10px]">
                        <div>
                            <Logo/>
                        </div>
                        <div>
                            <h1>Meta<span className="font-bold text-black">Blog</span></h1>
                            <p>© All Rights Reserved.</p>
                        </div>
                    </div>
                    <div className="w-[921px] h-[24px] flex justify-end gap-[32px]">
                        <p className="text-black">Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}