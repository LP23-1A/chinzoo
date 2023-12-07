import Navbar from "@/components/Navbar"
import Carsoule from "@/components/Carsoule"
import Trending from "@/components/Trending"
import Allblogpost from "@/components/Allblogpost"
import Footer from "@/components/Footer"
import axios from "axios"
import { useEffect, useState } from "react"

const api = "https://dev.to/api/articles?username=gereltuyamz"

export default function Home() {

  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData((prev) => [...prev, ...res.data]);
  };

  const handler = () => {
    getData("https://dev.to/api/articles")
  }

  useEffect(() => {
    getData(api);
  }, []);

  return (
    <main className="`body max-w-[1917px]`flex justify-center items-center">
        <div className="flex flex-col gap-[100px] justify-center items-center">
          <Navbar/>
          <Carsoule/>
          <Trending/>
          <div className="w-[1216px] flex flex-wrap gap-[20px] justify-between">
          <Allblogpost/>
            {data.map((el, index) => {        
             return (          
              <div className="w-[392px] h-[476px] p-[16px] border rounded-[6px]">
                  <div className="flex">
                  <div className="flex justify-start items-start flex-col gap-[10px]">
                    <img className="w-[360px] rounded-[6px] h-[240px]" src={el.social_image}/>
                    <button className="pt-[4px] pb-[4px] pr-[10px] pl-[10px] bg-[#eef2ff] rounded-[8px] text-[#818cf8]">{el.tag_list}</button>
                    <h1 className="text-[24px] font-bold">{el.title}</h1>
                    <p className="text-[16px] text-[#97989F]">{el.readable_publish_date}</p>
                  </div>
              </div>
              </div>
              );
                   
                })}      

          </div>
              <button onClick={handler} className="pt-[12px] pb-[12px] pl-[20px] pr-[20px] rounded-[12px] bg-gray-100 border hover:bg-gray-200">load more</button>
          <Footer/>
        </div>
    </main>
  )
}
