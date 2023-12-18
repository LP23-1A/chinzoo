import { useState } from "react";
import { CarouselData } from '@/constant/Caruoseldata'
import filter from '@/components/Allblogpost'
import { useParams } from "next/navigation";
const Carousel = () => {
    const [ activeIndex, setActiveIndex ] = useState(0)
    const increment = () => {
        if (activeIndex === 2) {
            setActiveIndex(0);
            return;
        }
        setActiveIndex((activeIndex) => activeIndex + 1);
    }
    const decrement = () => {
        if (activeIndex === 0) {
            setActiveIndex(2);
            return;
        }
        setActiveIndex((activeIndex) => activeIndex - 1);
    }
    return (
        <div className="mt-[100px] max-sm:hidden">
            {CarouselData.length != 0 && (
            <div className="w-[1216px] relative text-black rounded-lg">
                <img src={ CarouselData[activeIndex].url } className="w-full max-h-[650px] rounded-lg" />
                <div className="bg-white rounded-lg absolute left-0 bottom-0 p-7 flex flex-col gap-1 max-w-[518px] m-3 border border-[#E8E8EA]">
                    <button onClick={useParams(filter)} className="text-[19px] font-normal bg-blue-600 text-white p-1 px-2 rounded-md w-fit">
                        { CarouselData[activeIndex].btn }
                    </button>
                    <p className="font-bold text-3xl">
                        { CarouselData[activeIndex].desc }
                    </p>
                    <p className="text-[#97989F] text-xl">{CarouselData[activeIndex].day}</p>
                </div>
            </div>
            )}
            <div className="flex justify-end gap-4 my-4">
                <button onClick={decrement} className="border py-[3px] px-[4px] rounded-[4px] hover:text-[#D4A373]">Prev</button>
                <button onClick={increment} className="border py-[3px] px-[4px] rounded-[4px] hover:text-[#D4A373]">Next</button>
            </div>
        </div>
    )
}

export default Carousel
