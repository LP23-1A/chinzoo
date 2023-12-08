
const Allblogpost = () => {
    return(
       <div className=" flex  flex-col gap-[32px] items-center">
            <div className="flex flex-col gap-[32px]">
                <div className="w-[1216px] flex flex-col justify-center gap-[32px]">
                    <div>
                        <h1 className="text-[24px] font-bold">All Blog Post</h1>
                    </div>
                    <div className=" flex gap-[30px]">
                        <ul className=" flex gap-[20px]">
                            <li className="hover:text-[#D4A373]">All</li>
                            <li className="hover:text-[#D4A373]">Design</li>
                            <li className="hover:text-[#D4A373]">Travel</li>
                            <li className="hover:text-[#D4A373]">Fashion</li>
                            <li className="hover:text-[#D4A373]">Technology</li>
                            <li className="hover:text-[#D4A373]">Branding</li>
                        </ul>
                        <button className="w-[826px] flex justify-end hover:text-[#D4A373]">View All</button>
                    </div>
                </div>
            </div>
       </div>
    )
}
export default Allblogpost  