import Allblogpost from "@/components/Allblogpost"

export default function AllBlog () {
    return(
        <div className="flex flex-col gap-[32px]">
            <div className="w-[1216px] flex flex-col justify-center gap-[32px]">
                <div>
                    <h1 className="text-[24px] font-bold">All Blog Post</h1>
                </div>
                <div className=" flex gap-[30px]">
                    <ul className=" flex gap-[20px]">
                        <li className="text-[#D4A373]">All</li>
                        <li>Design</li>
                        <li>Travel</li>
                        <li>Fashion</li>
                        <li>Technology</li>
                        <li>Branding</li>
                    </ul>
                    <p className="w-[826px] flex justify-end">View All</p>
                </div>
             </div>
             <Allblogpost/>
        </div>
        

    )
}