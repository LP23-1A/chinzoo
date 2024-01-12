export default function Payments () {
    return(
        <div className="flex flex-col gap-[24px]">
            <div className="flex items-center w-[100%] justify-between">
                <div>
                    <div className="join gap-3">
                        <button className="join-item btn bg-[#E5E7EB] hover:bg-white  border-none text-black">«</button>
                        <button className="join-item btn bg-[#efeff5] hover:bg-white rounded-none border-none text-black">Last 30 Days</button>
                        <button className="join-item btn bg-[#E5E7EB] hover:bg-white  border-none text-black">»</button>
                    </div>
                </div>
                <div>
                    <button className="text-black  font-bold flex items-center py-[13px] rounded-[8px] px-[8px]  bg-white">
                        Newest First 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.3 14.3L8.69998 11.7C8.38331 11.3833 8.31248 11.0208 8.48748 10.6125C8.66248 10.2042 8.97498 10 9.42498 10H14.575C15.025 10 15.3375 10.2042 15.5125 10.6125C15.6875 11.0208 15.6166 11.3833 15.3 11.7L12.7 14.3C12.6 14.4 12.4916 14.475 12.375 14.525C12.2583 14.575 12.1333 14.6 12 14.6C11.8666 14.6 11.7416 14.575 11.625 14.525C11.5083 14.475 11.4 14.4 11.3 14.3Z" fill="#1F2937"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                <label className=" flex  items-center gap-[10px] cursor-pointer">
                    <input type="checkbox"  className="checkbox" />
                    <span className="text-black">Select all</span> 
                </label>
                <p className="font-bold">- 35,500₮</p>
            </div>
            <div className="gap-[10px]">
                <p className="text-black">Today</p>
                <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                </div>
            </div>
            <div className="gap-[10px]">
                <p className="text-black">Yesterday</p>
                <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                    <div className="flex items-center justify-between bg-white py-[10px] px-[16px] rounded-[8px]">
                        <label className=" flex  items-center gap-[10px] cursor-pointer">
                            <input type="checkbox"  className="checkbox" />
                            <div className="w-[30px] h-[30px] rounded-[50%] bg-blue-500 flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 9.02724V16.2499C17.5 16.5814 17.3683 16.8994 17.1339 17.1338C16.8995 17.3682 16.5815 17.4999 16.25 17.4999H13.125C12.7935 17.4999 12.4755 17.3682 12.2411 17.1338C12.0067 16.8994 11.875 16.5814 11.875 16.2499V13.1249C11.875 12.9591 11.8092 12.8002 11.6919 12.6829C11.5747 12.5657 11.4158 12.4999 11.25 12.4999H8.75C8.58424 12.4999 8.42527 12.5657 8.30806 12.6829C8.19085 12.8002 8.125 12.9591 8.125 13.1249V16.2499C8.125 16.5814 7.9933 16.8994 7.75888 17.1338C7.52446 17.3682 7.20652 17.4999 6.875 17.4999H3.75C3.41848 17.4999 3.10054 17.3682 2.86612 17.1338C2.6317 16.8994 2.5 16.5814 2.5 16.2499V9.02724C2.49997 8.85424 2.53586 8.68311 2.60538 8.5247C2.67491 8.36628 2.77656 8.22402 2.90391 8.10692L9.15391 2.21005L9.1625 2.20145C9.39261 1.99218 9.69248 1.87622 10.0035 1.87622C10.3146 1.87622 10.6144 1.99218 10.8445 2.20145C10.8472 2.20451 10.8501 2.20738 10.8531 2.21005L17.1031 8.10692C17.2292 8.22464 17.3295 8.36718 17.3978 8.52556C17.4661 8.68395 17.5009 8.85475 17.5 9.02724Z" fill="white"/></svg>
                            </div>
                            <div className="flex flex-col gap-0">
                                <p className="text-black">Lending & Renting</p>
                                <span className="text-[10px]">14:00</span>
                            </div>
                        </label>
                        <p className="font-bold">- 35,500₮</p>
                    </div>
                </div>
            </div>
        </div>
    )
}