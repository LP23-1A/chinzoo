import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';


export default function Navbar () {
    return(
        <nav className="bg-white w-[100%] h-[56px] px-[220px] py-[10px] flex justify-between">
           <div className="left flex gap-[100px]">
                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M5.85882 2.5397L1.65369 10.4105C1.12892 11.3956 0.865967 12.4767 0.865967 13.5592C0.865967 14.6419 1.12892 15.7228 1.65369 16.7079L5.85882 24.5789C6.63389 26.0327 8.14968 26.9407 9.79921 26.9407H14.2658V24.711H14.2644C13.4403 24.711 12.6824 24.2577 12.2948 23.5309L8.09132 15.6584C7.74001 15.0022 7.56493 14.2815 7.56493 13.5592C7.56493 12.8369 7.74001 12.1163 8.09132 11.4602L12.2948 3.58775C12.6824 2.86077 13.4403 2.40758 14.2644 2.40758H14.2658V0.177734H9.79921C8.14968 0.177734 6.63389 1.08589 5.85882 2.5397Z" fill="black"/>
                        <path d="M31.3423 10.4106L27.1374 2.53976C26.3621 1.08579 24.8465 0.177792 23.197 0.177792H18.7302V2.40747H18.7318C19.5558 2.40747 20.3137 2.86082 20.7012 3.58764L24.9047 11.4601C25.2562 12.1163 25.4309 12.837 25.4309 13.5593C25.4309 14.2816 25.2562 15.0022 24.9047 15.6585L20.7012 23.5307C20.3137 24.2577 19.5558 24.7109 18.7318 24.7109H18.7302V26.9408H23.197C24.8465 26.9408 26.3621 26.0328 27.1374 24.5788L31.3423 16.708C31.8669 15.7229 32.13 14.6418 32.13 13.5593C32.13 12.4767 31.8669 11.3957 31.3423 10.4106Z" fill="black"/>
                    </svg>
                </div>
                    <ul className="text-black flex gap-[100px]">
                        <button className="p-[3px]">НҮҮР</button>
                        <button className="p-[3px]">ХООЛНЫ ЦЭС</button>
                        <button className="p-[3px]">ХҮРГЭЛТИЙН БҮС</button>
                    </ul>
            </div>
            <div className="right flex items-center gap-[20px]">
                <div className='border-2 border-black flex p-[5px] rounded-[10px] gap-2'>
                    <SearchIcon className='text-black'/>
                    <input placeholder="хайх" className=" text-black p-[] material-icons-outlined "/>
                </div>            
                <div className='flex gap-2'>
                    <p className="text-black">сагс</p>
                    <ShoppingBasketIcon className='text-black'/>
                </div>
                <div className='flex gap-2'>
                    <p className="text-black">нэвтрэх</p>     
                    <PersonIcon className='text-black'/>      
                </div>    
            </div>
        </nav>
    )
}