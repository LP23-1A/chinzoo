import axios from "axios"
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
const api = "https://dev.to/api/articles?username=gereltuyamz"

const Allblogpost = () => {

  const router = useRouter()
  const Error = () => {
      router.push('/Error')
  }

 const [data, setData] = useState([]);
 const valueRef = useRef('');
 const initData = useRef([]);
//  const router = useRouter();
 const getData = async (api) => {
   let res = await axios.get(api);
   initData.current = res.data;
   setData(res.data);
 };

 const reset = () => setData(initData.current);

 const filter = (name) => setData(() => initData.current.filter((el) => el.tags === name));
 
 const handler = () => getData("https://dev.to/api/articles")
  
//  );
//  count [Count, setCount] = useState(6);

// const handler = () => {
//   setCount ((prev) => prev + 3)
// }
 
 const handlerInputValue = (value) => {
   valueRef.current =  value;
 }

 useEffect(() => {
   getData(api);
 }, []);
    return(
    <div className="flex flex-col justify-center items-center gap-[20px]">
         <div className="w-[1216px] flex flex-wrap gap-[20px] justify-between">
         <div className="flex flex-col gap-[32px] w-[1216px]">
                            <h1 className="text-[24px] font-bold">All Blog Post</h1>
                           <div className="flex gap-[20px]">
                              <button className="hover:text-[#D4A373]" onClick={() => filter('webdev')}>Webdev</button>
                              <button className="hover:text-[#D4A373]" onClick={() => filter('programming')}>Programming</button>
                              <button className="hover:text-[#D4A373]" onClick={() => filter('nextjs')}>Nextjs</button>
                              <button className="hover:text-[#D4A373]" onClick={reset}>Reset</button>
                           </div>
                           <link hreg></link>
                </div>  
                  <div className="flex flex-wrap gap-[20px]">
                    {data.map((el, index) => {        
                      return (          
                        <div onClick={Error} className="cursor-pointer">
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
                        </div>
                        );
                            
                          })}    
                  </div>
          </div>
              <button onClick={handler} className="pt-[12px] pb-[12px] pl-[20px] pr-[20px] rounded-[12px] bg-gray-100 border hover:bg-gray-200">load more</button>
    </div>
    )
}
export default Allblogpost  

