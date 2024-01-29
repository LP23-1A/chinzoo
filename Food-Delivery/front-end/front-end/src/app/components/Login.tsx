"use client"
import Link from "next/link"

export default function Login() {

    return(
        <div className=" w-[448px] h-[549px] p-[32px] flex flex-col gap-[48px]">
            <p className="text-[28px] text-black flex justify-center">Нэвтрэх</p>
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col">
                    <p className="text-black">Имэйл</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" placeholder="Имэйл хаягаа оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Нууц үг</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" type="password" placeholder="нууц үгээ оруулна уу"/>
                    <p className="flex justify-end text-black">Нууц үг сэргээх</p>
                </div>
            </div>
            <div className="flex flex-col gap-[32px]">
                <button className="w-[100%] rounded-[5px] bg-gray-200 p-[10px]">НЭВТРЭХ</button>
                <p className="flex justify-center text-black">ЭСВЭЛ</p>
                <Link href="/register">
                    <button className="w-[100%] rounded-[5px] border-2 border-green-600 text-black p-[10px]">БҮРТГҮҮЛЭХ</button>
                </Link>
            </div>
        </div>
    )
}