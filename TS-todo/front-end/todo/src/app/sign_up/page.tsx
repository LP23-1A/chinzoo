"use client"

import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const BASE_URL = "http://localhost:8000/auth/signup"

export default function Signup() {

  const router = useRouter();
  
    const [username, setname] = useState("");
    const [password, setpassword] = useState("");
  
    const handler = async () => {
      let res = await axios.post(BASE_URL, {username, password});
      router.push("/login");
  };
  


  return (
   <div className='bg-red-200 w-[100%] h-[100vh] flex justify-center items-center'>
     <form className='flex justify-center items-center flex-col w-fit h-fit p-[20px] rounded-[10px] bg-white'>
      <label className='text-black'>
        Username:
        <input type="text" className='text-black bg-gray-200 p-2 rounded-[5px]' value={username} onChange={(event) => setname(event.target.value)} required />
      </label>
      <br />
      <label className='text-black'>
        Password:
        <input type="password" className='text-black bg-gray-200 p-2 rounded-[5px]' value={password} onChange={(event) => setpassword(event.target.value)} required />
      </label>
      <br />
      <button onClick={handler} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] rounded-[5px] w-[100%] ' type="submit">Sign Up</button>
    </form>
   </div>
  );
};

