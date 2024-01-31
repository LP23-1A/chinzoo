import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer () {
    return(
        <div className="w-[100%] h-[400px] bg-[#18BA51] py-[50px] px-[220px]">
            <div className=" flex flex-col justify-between gap-7">
                <div className="flex items-center justify-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M5.85978 2.53992L1.65425 10.4115C1.12943 11.3967 0.866455 12.4779 0.866455 13.5605C0.866455 14.6433 1.12943 15.7243 1.65425 16.7095L5.85978 24.5812C6.63493 26.0352 8.15086 26.9433 9.80055 26.9433H14.2676V24.7134H14.2661C13.442 24.7134 12.6841 24.26 12.2964 23.5331L8.09249 15.6599C7.74115 15.0036 7.56605 14.2829 7.56605 13.5605C7.56605 12.8381 7.74115 12.1174 8.09249 11.4613L12.2964 3.58808C12.6841 2.86102 13.442 2.40779 14.2661 2.40779H14.2676V0.177734H9.80055C8.15086 0.177734 6.63493 1.08598 5.85978 2.53992Z" fill="white"/>
                        <path d="M31.3457 10.4116L27.1403 2.53998C26.365 1.08588 24.8493 0.177792 23.1996 0.177792H18.7324V2.40768H18.734C19.5581 2.40768 20.3161 2.86108 20.7036 3.58797L24.9075 11.4612C25.259 12.1175 25.4338 12.8382 25.4338 13.5606C25.4338 14.2829 25.259 15.0036 24.9075 15.6599L20.7036 23.533C20.3161 24.26 19.5581 24.7133 18.734 24.7133H18.7324V26.9433H23.1996C24.8493 26.9433 26.365 26.0352 27.1403 24.5811L31.3457 16.7095C31.8704 15.7244 32.1335 14.6432 32.1335 13.5606C32.1335 12.4779 31.8704 11.3967 31.3457 10.4116Z" fill="white"/>
                    </svg>
                    <p className="text-[20px]">Food Delivery</p>
                </div>
                <ul className="flex text-[16px] justify-between">
                    <li>Нүүр</li>
                    <li>Холбоо барих</li>
                    <li>Хоолны цэс</li>
                    <li>Үйлчилгээний нөхцөл</li>
                    <li>Хүргэлтийн бүс</li>
                    <li>Нууцлалын бодлого</li>
                </ul>
                <div className='flex justify-center gap-[40px]'>
                    <FacebookIcon className='w-[50px] h-[50px]'/>
                    <InstagramIcon className='w-[50px] h-[50px]'/>
                    <TwitterIcon className='w-[50px] h-[50px]'/>
                </div>
                <hr />
                <div className='flex flex-col justify-center items-center'>
                    <p>© 2024 Pinecone Foods LLC </p>
                    <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                </div>
            </div>
        </div>
    )
}