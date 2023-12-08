
export default function Post () {
 
    return (
        <div className="flex gap-[10px] flex-col justify-center items-center">   
              <input type="title" placeholder="title" className="bg-gray-200 p-[4px] border " />
              <input type="text" placeholder="desc" className="bg-gray-200 p-[4px] border " />
              <input type="text" placeholder="tag" className="bg-gray-200 p-[4px] border " />
              <input type="text" placeholder="series" className="bg-gray-200 p-[4px] border " />
              <button className="border w-[100px] bg-gray-400 hover:bg-gray-600">Post</button>
        </div>
    )
}