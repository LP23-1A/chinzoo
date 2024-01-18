'use client'
import Iconn from '@/components/Iconn'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from "next/navigation" 
import Link from 'next/link'

const api = "http://localhost:8000/users"


export default function Register () {
  const [ name, setName] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const axiosing = async () => {
    console.log("ds");
    try{
      const res = await axios.post(api, {name, email, password})
      console.log(res.data)
    } catch (error){
      console.error("singup error", error);
    }
  }
  const router = useRouter();
  const keys = { name, email, password };
  const Currency = () => {
    router.push("/Currency");
    localStorage.setItem("data", JSON.stringify(keys));
  };
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
                 <input className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Name' type="name" value={name} onChange={(e)=> setName(e.target.value)}></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Email' type="email" value={(email)} onChange={(e)=> setEmail(e.target.value)}></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Password' type="password" value={(password)} onChange={(e)=> setPassword(e.target.value)}></input>
                 <input className='h-[48px] rounded-[8px] px-[20px] text-black border bg-gray-100' placeholder='Re-Password'type="password"></input>
                <button onclick={Currency} className=' text-white w-[100%] py-[10px] rounded-[20px] bg-[#0166FF]' onClick={axiosing}>
                  Sign up
                </button>
                </div>
                <div className='flex justify-center gap-[10px] text-black'>
                  <Link href="/Login">
                  <button>
                  Already have account?
                  </button>
                  </Link>
                  
                 
                 <button onClick={()=>router.push("/Login")} className='text-[#0166FF]'>
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