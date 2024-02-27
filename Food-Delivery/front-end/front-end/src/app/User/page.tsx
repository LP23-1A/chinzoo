import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ModeIcon from '@mui/icons-material/Mode';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutIcon from '@mui/icons-material/Logout';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function User(){
    return(
        <div className="flex flex-col justify-between w-[100%] h-[100vh]">
            <Navbar/>
            <div className="w-[100%] h-[62vh] bg-white flex justify-center flex-col items-center gap-[20px] ">
                    <div className="relative">
                        <Stack>
                            <Avatar alt="Remy Sharp" src="" className="w-[100px] h-[100px]"/>
                        </Stack>
                       <button><ModeIcon className="text-green-500 absolute right-0 top-[72px] border-2 border-gray  px-[5px] py-[5px] bg-white rounded-[50%] w-[40px] h-[40px]"/></button>
                    </div>
                <div className="w-[432px] h-[400px] flex flex-col justify-center items-center ">
                    <div className="flex gap-[10px] flex-col justify-center items-center">
                       <div className="w-[400px] h-[64px] rounded-[4px] bg-gray-100 flex  px-4 justify-between items-center">
                           <div className="flex gap-[50px] justify-center items-center">
                                <div className="bg-gray-200 w-[40px] h-[40px] rounded-[50%] ">
                                    <PermIdentityIcon className="w-[40px] h-[40px] rounded-[50%] bg-white  text-black bg-white-200 color-black"/>
                                </div>
                                <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Таны нэр"
                                defaultValue="Угтахбаяр"
                                />
                                </div>
                           </div>
                            <div>
                                <button><ModeIcon className="text-green-500 w-[40px] h-[40px]"/></button>
                            </div>
                       </div>
                       <div className="w-[400px] h-[64px] rounded-[4px] bg-gray-100 flex  px-4 justify-between items-center">
                           <div className="flex gap-[50px] justify-center items-center">
                                <div className="bg-gray-200 w-[40px] h-[40px] rounded-[50%] ">
                                    <PhoneIcon className="w-[40px] h-[40px] rounded-[50%] bg-white  text-black bg-white-200 color-black"/>
                                </div>
                                <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Утасны дугаар"
                                defaultValue="99119911"
                                />
                                </div>
                           </div>
                            <div>
                            <button><ModeIcon className="text-green-500 w-[40px] h-[40px]"/></button>
                            </div>
                       </div>
                       <div className="w-[400px] h-[64px] rounded-[4px] bg-gray-100 flex  px-4 justify-between items-center">
                           <div className="flex gap-[50px] justify-center items-center">
                                <div className="bg-gray-200 w-[40px] h-[40px] rounded-[50%] ">
                                    <MarkunreadIcon className="w-[40px] h-[40px] rounded-[50%] bg-white  text-black bg-white-200 color-black"/>
                                </div>
                                <div>
                                <TextField
                                required
                                id="outlined-required"
                                label="Имэйл хаяг"
                                defaultValue="Ugtahbayr@gmail.com"
                                />
                                </div>
                           </div>
                            <div>
                            <button><ModeIcon className="text-green-500 w-[40px] h-[40px]"/></button>
                            </div>
                       </div>
                       <button className="w-[400px] h-[64px] hover:border-black hover:border-2  rounded-[4px] bg-white flex  px-4 justify-between items-center">
                           <div className="flex gap-[50px] justify-center items-center">
                                <div className="bg-gray-200 w-[40px] h-[40px] rounded-[50%] ">
                                    <RestoreIcon className="w-[40px] h-[40px] rounded-[50%] bg-white  text-black bg-white-200 color-black"/>
                                </div>
                                <div>
                                
                                    <p className="text-black">Захиалгын түүх</p>
                                </div>
                           </div>
                          
                       </button>
                       <button className="w-[400px] h-[64px] rounded-[4px] bg-white hover:border-black hover:border-2 flex  px-4 justify-between items-center">
                           <div className="flex gap-[50px] justify-center items-center">
                                <div className="bg-gray-200 w-[40px] h-[40px] rounded-[50%] ">
                                    <LogoutIcon className="w-[40px] h-[40px] rounded-[50%] bg-white  text-black bg-white-200 color-black"/>
                                </div>
                                <div>
                        
                                    <p className="text-black">Гарах</p>
                                </div>
                           </div>
                           
                       </button>
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}