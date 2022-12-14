import React from 'react'
import Image from 'next/image'
import webImg from '../images/webImage.png'
import ProfImg from '../images/profileImg.png'

const NavBar = () => {
  return (
    <nav className='p-8 bg-[#562EFF] h-20 flex flex-col justify-center'>
        <div className='flex self-center w-[64%] justify-between'>
            <div className='flex items-center'>
                <Image 
                    src={webImg}
                    alt='Web Logo'
                    width='40'
                    height='51'
                />
                <p className='text-white text-2xl ml-2'>Idea</p>
            </div>
            <div className='flex'>
                <ul className='list-none flex mr-4 items-center'>
                    <li className='mr-4 text-white text-xl'>Home</li>
                    <li className='mr-4 text-white text-xl'>About</li>
                    <li className='mr-4 text-white text-xl'>Works</li>
                </ul>
                <Image
                    src={ProfImg}
                    alt='Profile'
                    width='51'
                    height='51'
                />
            </div>
        </div>
    </nav>
  )
}

export default NavBar