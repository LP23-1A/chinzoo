"use client"
import Icon from "@/components/Iconn"
import Check from "@/components/Check"
import Link from "next/link"
import { useRouter } from "next/navigation" 
import { useState } from "react";



export default function Select () {
  const router = useRouter();
  const data = JSON.parse(localStorage.getItem("data"));
  console.log(data);
  const handlerName = async () => {
    let res = await axios.post(api, {
      name: data.name,
      email: data.email,
      password: data.password,
      currency_type: data.currency,
    });
    router.push("/dashboard");
    console.log("success");
  };
    return(
        <div  className="flex justify-center items-center w-[100%] h-[100vh] gap-[141px] flex-col bg-white">
        <div className="mt-[40px] gap-[48px] flex flex-col">
            <Icon/>
            <div>
                <ul className="steps">
                    <li className="step step-primary">currency</li>
                    <li className="step step-primary">finish</li>
                </ul>
            </div>
        </div>
        <div  className="flex justify-center items-center w-[100%] h-[100vh] flex-col bg-white gap-[32px] mb-[399px]">
            <div className="flex flex-col gap-[24px]">
                <div className="flex justify-center items-center flex-col">
                    <div className="w-[48px] h-[48px] rounded-full bg-[#0166FF] flex justify-center items-center">
                       <Check/>
                    </div>
                    <p className="text-black text-[24px]">Good job</p>
                </div>
            <div>
             <p className="text-black">Your very first account has been created. Now <br/>continue to dashboard and start tracking</p>
            </div>
       </div>
       <Link href="/Dashboard">
            <button className="bg-[#0166FF] text-white w-[384px] h-[48px] rounded-[20px]">Go to dashboard</button>
        </Link> 
        </div>
    </div>
    )
}