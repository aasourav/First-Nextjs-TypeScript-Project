import React from 'react'
import Image from 'next/image'
import webImg from '../images/webImage.png'
import ProfImg from '../images/profileImg.png'

const Footer = () => {
  return (
    <nav className='p-8 bg-[#562EFF] h-20 flex flex-col justify-center'>
        <div className='text-white flex self-center w-[64%] justify-center'>
          <p>Copyright © All rights reserved.</p>
        </div>
    </nav>
  )
}

export default Footer