import Link from 'next/link';
import { menus } from '@/constants';

export const Navbar = () => {
  return (
    <header className="flex gap-4 bg-red-400 w-[200px] h-[200px]  justify-center items-center">
      {menus.map((menu, index) => (
        <Link className='bg-blue-200 p-3 rounded-[10px]' key={menu.link + index} href={menu.link}>
          {menu.title}
        </Link>
      ))}
    </header>
  );
};