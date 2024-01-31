import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Padding } from '@mui/icons-material';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 448,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  height: 549,
  padding: 4
};


export default function Loginmodal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    };

    const router = useRouter();

    const [input, setinput] = useState({
        email: "",
        password: "",
    });

    const [error, seterror] = useState('');

    const API = "http://localhost:8000/auth/login";

    const submitHandler = async (e: any) => {
        e.preventDefault();
    try {
        const { data } = await axios.post(API,{
            ...input,
        });

        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('dashboard');
    } catch (error:any) {
        seterror(error.response.data.msg)
    }}
    return(
        <div>
            <Button className='text-black m-0 p-0' onClick={handleOpen}>нэвтрэх</Button>
                <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{backdrop: {timeout: 500,},}}>
                    <Fade in={open} className=' rounded-[16px] border-none flex flex-col gap-[48px]'>
                        <Box sx={style}>
                            <p className='text-black text-center text-[28px] font-bold'>Нэвтрэх</p>
                            <div className='flex flex-col gap-[16px]'>
                                <div className='flex flex-col'>
                                    <InputLabel>Имэйл</InputLabel>
                                    <input onChange={(e) =>setinput((prev) => ({ ...prev, email: e.target.value }))}  type="email" className='bg-gray-200 rounded-[4px] p-[5px] h-[55.99px]    text-black' placeholder='Имэйл хаягаа оруулна уу' />  
                                </div>                  
                                <FormControl sx={{width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Нууц үг</InputLabel>
                                    <OutlinedInput className='bg-gray-200 border-none' onChange={(e) => setinput((prev) => ({ ...prev, password: e.target.value }))}
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end">
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                        />
                                </FormControl>
                                {error && <p className="text-red-600 absolute top-[280px]">user not found</p>}
                            </div>
                            <div className="flex flex-col gap-[32px]">
                                
                                <button onClick={submitHandler} className="w-[100%] hover:bg-green-400 rounded-[5px] bg-gray-200 p-[10px]">НЭВТРЭХ</button>
                                <p className="flex justify-center text-black">ЭСВЭЛ</p>
                                <Link href="/register">
                                    <button className="w-[100%] rounded-[5px] border-2 border-green-600 text-black p-[10px]">БҮРТГҮҮЛЭХ</button>
                                </Link>
                            </div>
                                    
                        </Box>
                    </Fade>
                </Modal>  

        </div>
    )
}