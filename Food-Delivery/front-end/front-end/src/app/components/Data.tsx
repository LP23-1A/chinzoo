import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpaIcon from '@mui/icons-material/Spa';

let data = [
    {
        logo: <AutoStoriesIcon className='w-[50px] h-[50px]'/>,
        title: "Хүргэлтийн төлөв хянах",
        desc: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        logo: <ScheduleIcon className='w-[50px] h-[50px]'/>,
        title: "Шуурхай хүргэлт",
        desc: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        logo: <SpaIcon className='w-[50px] h-[50px]'/>,
        title: "Эрүүл, баталгаат орц",
        desc: "Захиалга бэлтгэлийн явцыг хянах"
    },
    {
        logo: <AutoStoriesIcon className='w-[50px] h-[50px]'/>,
        title: "Хоолны өргөн сонголт",
        desc: "Захиалга бэлтгэлийн явцыг хянах"
    }
]

export default function Grouop (){
    return(
        <>
            {
                data.map((el)=> {
                    return(
                        <div className=" mt-[122px] rounded-[10px] gap-[50px] flex flex-col bg-white border-2 border-gray-200 w-[364px] h-[200px] p-[26px]">
                            <div><span className='text-[#18BA51]'>{el.logo}</span></div>
                            <div>
                                <p className="font-bold text-[18px] text-black">{el.title}</p>
                                <p className="text-black">{el.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}