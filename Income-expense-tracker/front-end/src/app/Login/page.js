'use client'
import Link from 'next/link'
import Iconn from '@/components/Iconn'
import axios from 'axios'
import { useState } from "react";
import { useRouter } from 'next/navigation';
const API = 'http://localhost:8000/users/user'  


export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const handler = async () => {
    let res = await axios.post(API, { email: email, password: password})
    console.log(res.data);
    if ((res.data == 'success')) {
      router.push("/Loading")
    }
  }
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
                 <input onChange={(e) => setEmail(e.target.value)} value={email} className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Email'  type="email"></input>
                 <input  onChange={(e) => setPassword(e.target.value)} value={password} className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Password' type="password"></input>
                <button onClick={handler} className=' text-white w-[100%] py-[10px] rounded-[20px] bg-[#0166FF]'>
                  Log in
                </button>
                </div>
                <div className='flex justify-center gap-[10px] text-black'>
                  <Link href="/Register">
                  <button>
                    Dont have account?
                  </button>
                  
              
                 <button className='text-[#0166FF]'>
                    Sign up
                  </button>
                  </Link>
                </div>

              </div>
          </div>
          <div className='w-[50%] h-[100vh] bg-blue-600'>
          </div>
        </div>
    )
}