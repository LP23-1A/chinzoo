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
            {data.map((el, index) => {        
             return (          
              <div className="flex justify-center items-center gap-[20px] flex-wrap w-[1216px]">
                  <div  className=""          
                key={index}            
                style={{              
                  backgroundImage: `url(${el.social_image})`,              
                  height: "240px",              
                  width: "360px",           
                  background: "cover"
                  }}         
                  >           
                </div>
                <button className="pt-[4px] pb-[4px] pr-[10px] pl-[10px] bg-[#eef2ff] rounded-[8px] text-[#818cf8]">{el.tag_list}</button>
                <h1>{el.title}</h1>
              </div>);
                   
                })}      
              <button onClick={handler}>load more</button>
          <Allblogpost/>
          <Footer/>
        </div>
    </main>
  )
}
