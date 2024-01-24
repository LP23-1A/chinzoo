'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const BASE_URL = 'http://localhost:8000/auth/login';

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(BASE_URL, {
        ...input,
      });

      localStorage.setItem('user', JSON.stringify(data.user));

      router.push('/dashboard');
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="w-[100%] h-[100vh]  bg-red-200  flex justify-center items-center p-[20px]">
      <form className="flex flex-col gap-4 p-[20px] bg-white rounded-[20px]">
        <h1 className='text-black font-bold text-[32px]'>Log in</h1>
          <label className='text-black'>
            Username:
            <input
              onChange={(e) =>
                setInput((prev) => ({ ...prev, username: e.target.value }))
              }
              className="ml-2 bg-gray-200 p-2 rounded-[5px]"
              placeholder="Enter your username"
              type="text"
            />
          </label>
          <label className="text-black">
            Password:
            <input
              onChange={(e) =>
                setInput((prev) => ({ ...prev, password: e.target.value }))
              }
              className="ml-2 bg-gray-200 p-2 rounded-[5px]"
              placeholder="Enter your password"
              type="password"
            />
          </label>
          {error && <p className="text-red-600 my-2">{error}</p>}

        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] rounded-[5px]' onClick={submitHandler}>Login</button>
      </form> 
    </div>
  );
};

export default Page;