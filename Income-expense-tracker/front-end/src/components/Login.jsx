import Link from 'next/link'
import Iconn from '@/components/Iconn'
export default function Login () {
    return(
        <div className="flex">
            <div className='w-[50%] h-[100vh] bg-white flex items-center justify-center'>
              <div className='w-[384px] h-[426px] ml-[150px] flex flex-col gap-[40px] py-[5.4px]'>
                <Iconn/>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-black text-[24px]'>Welcome Back</h1>
                  <p className='text-black text-[16px]'>Welcome back, Please enter your details</p>
                </div>
                <div className=' flex flex-col gap-2'>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Email'></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] border bg-gray-100' placeholder='Password'></input>
                <button className=' text-white w-[100%] py-[10px] rounded-[20px] bg-[#0166FF]'>
                  Log in
                </button>
                </div>
                <div className='flex justify-center gap-[10px] text-black'>
                  <Link href="/register.js">
                  <button>
                  Dont have account?
                  </button>
                  </Link>
                  
              
                 <button className='text-[#0166FF]'>
                    Sign up
                  </button>
                </div>

              </div>
          </div>
          <div className='w-[50%] h-[100vh] bg-blue-600'>
          </div>
        </div>
    )
}