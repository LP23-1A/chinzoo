export default function Register () {
    return(
        <div className=" w-[448px] h-[549px] p-[28px] justify-center flex flex-col gap-[48px]">
            <p className="text-[28px] text-black flex justify-center">Бүртгүүлэх</p>
            <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col">
                    <p className="text-black">Нэр</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" placeholder="Нэрээ оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Имэйл</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200"  placeholder="И-мэйл хаягаа оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black">Хаяг</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200"  placeholder="Та хаягаа оруулна уу"/>
                </div>
                <div className="flex flex-col">
                   <p className="text-black"> Нууц үг</p>
                    <input className="h-[48px] text-black  rounded-[5px] p-[10px] bg-gray-200" type="password" placeholder="нууц үгээ оруулна уу"/>                 
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
                <button className="w-[100%] rounded-[5px] border-2 border-green-600 text-black p-[10px]">БҮРТГҮҮЛЭХ</button>    
            </div>
        </div>
    )
}