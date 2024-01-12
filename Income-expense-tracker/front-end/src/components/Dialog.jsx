import Homesvg from "./Homesvg"

export default function Dialog (){
    return(
        <dialog id="my_modal_3" className="modal">
                            <div className="w-[792px] h-[412px] modal-box bg-white">
                                <div className="">
                                    <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="font-bold text-lg text-black">Add Record</h3>
                                </div>
                                <div className="flex gap-[5px]">
                                    <div className=" flex flex-col w-[196px] justify-between ">
                                        <div className="flex h-[40px] w-[100%]">
                                            <button className="bg-[#0166FF] w-[100%] text-white px-[8px] rounded-lg">Expence</button>
                                            <button className="w-[100%] text-black bg-gray-300 px-[8px] rounded-lg">Income</button>
                                        </div>
                                        <div className="h-[76px]">
                                            <p className="text-black">Amount</p>
                                            <input className="w-[100%] text-black bg-gray-200 h-[40px] rounded-lg" placeholder="₮ 000.0"/>
                                        </div>
                                        {/* dropdown */}
                                        <details className="dropdown bg-white">
                                            <summary className="m-1 bg-white hover:bg-white btn w-[100%] flex justify-between"><p>Choose</p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#1F2937"/></svg></summary>
                                            <ul className="p-2 shadow menu dropdown-content bg-white z-[1] rounded-box w-52">
                                                <li><a><Homesvg/>Home</a></li>
                                                <li><a>Item 2</a></li>
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </ul>
                                        </details>
                                        <label for="Date of Birth"> 
                                            <input className="text-black bg-gray-200 h-[40px] rounded-lg w-[100%]" type="date" name="date"/> 
                                        </label> 
                                        <button className="w-[100%] bg-[#0166FF] text-white p-[8px] rounded-[20px]">Add Record</button>

                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="text-black">Payee</p>
                                        <div>
                                            <input placeholder="Write message" className="text-black w-[248px] rounded-lg px-[16px] py-[16px] h-[40px] bg-gray-100"/>
                                        </div>
                                        <div>
                                            <p className="text-black">Note</p>
                                            <textarea placeholder="Write here" className="text-black rounded-lg px-[16px] py-[16px] w-[248px] h-[250px] bg-gray-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </dialog>
    )
}