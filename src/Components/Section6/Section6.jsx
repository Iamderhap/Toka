import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image'

const Section6 = () => {
  return (
    <>
        <div className='flex flex-col justify-center lg:items-center gap-[50px] lg:flex py-[40px]'>
            <div className='flex items-center justify-center gap-[5px] text-[#FA4F09] font-bold'>
                <p>view all team</p>
                <FaArrowRight />
            </div>
            <div className='flex lg:flex-row flex-col justify-center items-center'>
                <img className='lg:w-[25%] w-[100%] ' src="/gallery-crypto-4.png" alt="" />
                <img className='lg:w-[25%] w-[100%]' src="/gallery-crypto-2.png" alt="" />
                <img className='lg:w-[25%] w-[100%] ' src="/gallery-crypto-1.png" alt="" />
                <img className='lg:w-[25%] w-[100%]' src="/gallery-crypto-3.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Section6