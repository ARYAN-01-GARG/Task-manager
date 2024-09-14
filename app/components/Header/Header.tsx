'use client'

import { useCallback, useState } from "react";
import { AiFillBell } from "react-icons/ai"
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md"
import { RiBarChartHorizontalFill, RiUserAddFill } from "react-icons/ri"
import UserMenu from "../UserMenu";

const Header = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const handleUserMenu = useCallback(() => {
        setIsUserMenuOpen((value) => !value);
    },[setIsUserMenuOpen]);


    const handleFullScreen = () => {
        if (isFullScreen) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
        setIsFullScreen((value) => !value);
    }
  return (
    <header className="mb-[4px]">
        <div className="px-8 py-6 flex flex-row gap-20 justify-between items-center shadow-md shadow-neutral-400 w-full h-full bg-purple-200/20">
            <div className="flex flex-row gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold text-[rgb(130,86,219)] relative z-50 cursor-pointer">TASK MANAGER</h1>
            <div className="absolute bg-rose-300 left-6 top-4 rounded-full z-10 p-4"></div>
            <div className="bg-[rgb(190,173,224)] rounded-full z-10 p-2 text-[rgb(78,9,215)] cursor-pointer">
                <RiBarChartHorizontalFill size={24}/>
            </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-8 pr-8">
                <div className="cursor-pointer rounded-lg text-[rgb(78,9,215)]" onClick={handleFullScreen}>
                    {isFullScreen ? <MdOutlineFullscreenExit size={30} /> : <MdOutlineFullscreen size={30}/>}
                </div>
                <div className="text-yellow-600 cursor-pointer relative">
                    <AiFillBell size={28} />
                    <div className="absolute -top-1 -right-[3px] bg-rose-500 text-white rounded-full w-3 h-3 flex justify-center items-center"></div>
                </div>
                <div className="relative bg-[rgb(190,173,224)] rounded-xl z-10 p-2 text-[rgb(78,9,215)] cursor-pointer" onClick={handleUserMenu}>
                    <RiUserAddFill size={24}/>
                    {isUserMenuOpen && <div className="absolute bg-white top-10 right-10 rounded-2xl py-5 px-3"><UserMenu/></div>}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header