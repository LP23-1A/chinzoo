import Logoexp from "./logoexp"

export default function Experience (){
    return(
        <div className=" bg-slate-100 flex justify-center p-[80px] dark:bg-[#111827] dark:text-white">
            <div className="flex flex-col justify-center gap-[48px]">
                <div className="flex flex-col justify-center items-center gap-[16px]">
                    <button className="bg-zinc-300 p-[8px] rounded-[8px] dark:bg-[#374151] dark:text-white">Experience</button>
                    <h2>Here is a quick summary of my most recent experiences:</h2>
                </div>
                <div className="flex justify-between bg-white p-[32px] rouded-[8px] gap-[48px] dark:bg-[#1F2937]">
                    <div><Logoexp/></div>
                    <div>
                        <div>
                            <h3>Sr. Frontend Developer</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Nov 2021 - Present</p>
                    </div>
                </div>
                <div className="flex justify-between bg-white p-[32px] gap-[48px] dark:bg-[#1F2937] ">
                    <div><Logoexp/></div>
                    <div>
                        <div>
                            <h3>Sr. Frontend Developer</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Jul 2017 - Oct 2021</p>
                    </div>
                </div>
                <div className="flex justify-between bg-white p-[32px] gap-[48px] dark:bg-[#1F2937]">
                    <div><Logoexp/></div>
                    <div>
                        <div>
                            <h3>Sr. Frontend Developer</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.asda.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p>Dec 2015 - May 2017</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
