import Link from 'next/link'
import Iconn from '@/components/Iconn'
export default function Register () {
    return(
        <div className="flex">
            <div className='w-[50%] h-[100vh] bg-white flex items-center justify-center'>
              <div className='w-[384px] h-[426px] ml-[150px] flex flex-col gap-[40px] py-[5.4px]'>
                <Iconn/>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-black text-[24px]'>Create Geld account</h1>
                  <p className='text-black text-[16px]'>Sign up below to create your Wallet account</p>
                </div>
                <div className=' flex flex-col gap-2'>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Name'></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Email'></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Password'></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Re-Password'></input>
                <button className=' text-white w-[100%] py-[10px] rounded-[20px] bg-[#0166FF]'>
                  Log in
                </button>
                </div>
                <div className='flex justify-center gap-[10px] text-black'>
                  <Link href="/register.js">
                  <button>
                  Already have account?
                  </button>
                  </Link>
                  
              
                 <button className='text-[#0166FF]'>
                    Log in
                  </button>
                </div>

              </div>
          </div>
          <div className='w-[50%] h-[100vh] bg-blue-600'>
          </div>
        </div>
    )
}