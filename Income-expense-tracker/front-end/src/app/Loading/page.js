"use client"
import Iconn from '@/components/Iconn'
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Loading () {
  const router = useRouter();
  useEffect(() => {
    setTimeout(router.push("/Dashboard"));
  }, 8000);
    return(
       <div className="bg-white flex flex-col justify-center items-center w-[100%] gap-[28px] h-[100vh]">
            <Iconn/>
            <div className='flex flex-col  justify-center items-center gap-[10px]'>
                <span className="bg-[#0166FF] loading loading-spinner loading-lg"></span>
                <h2 className='text-black'>Та түр хүлээнэ үү...</h2>
            </div>
       </div>
    )
}