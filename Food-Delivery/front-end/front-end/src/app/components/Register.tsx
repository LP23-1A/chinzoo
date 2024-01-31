"use client"

import axios from "axios"
import React, {useState} from "react"
import { useRouter } from "next/navigation"

const API = "http://localhost:8000/auth/signup"

export default function Register () {

    const router = useRouter();

        const [username, setusername] = useState("");
        const [password, setpassword] = useState("");
        const [address, setaddress] = useState("");
        const [email, setemail] = useState("");

        const handler = async () => {
            let res = await axios.post(API, {username, password, address, email})
        }

    return(
        <div className=" w-[448px] h-[549px] p-[28px] justify-center flex flex-col gap-[48px]">
            <p className="text-[28px] text-black flex justify-center">Бүртгүүлэх</p>
            <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col">
                    <p className="text-black">Нэр</p>
                    <input value={username} onChange={(e) => setusername(e.target.value)} className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" placeholder="Нэрээ оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Имэйл</p>
                    <input value={email} onChange={(e) => setemail(e.target.value)} className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200"  placeholder="И-мэйл хаягаа оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black">Хаяг</p>
                    <input value={address} onChange={(e) => setaddress(e.target.value)} className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200"  placeholder="Та хаягаа оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Нууц үг</p>
                    <input value={password} onChange={(e) => setpassword(e.target.value)} className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" type="password" placeholder="нууц үгээ оруулна уу"/>                 
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Нууц үг давтах</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" type="password" placeholder="нууц үгээ оруулна уу"/>
                </div>
            </div>
            <div className="flex flex-col gap-[32px] ">
               <div className="flex text-black gap-[8px] items-center">
                    <input type="checkbox" className="w-[20px] h-[20px]" /> 
                    <p>Үйлчилгээний нөхцөл зөвшөөрөх</p>
               </div>
                <button onClick={handler} className="w-[100%] rounded-[5px] border-2 border-green-600 text-black p-[10px]">БҮРТГҮҮЛЭХ</button>    
            </div>
        </div>
    )
}