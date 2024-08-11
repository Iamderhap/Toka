import React from 'react'
import Image from 'next/image'

const Partnership = () => {
  return (
    <>
        <div className='flex flex-col items-center text-center gap-[70px] py-[40px] lg:flex lg:flex-col w-[100%]'>
            <div className='w-[100vw] lg:[33vw] flex flex-col gap-[10px] items-center'>
                  <h1 className='text-[#61CE70] font-bold text-[25px]'>partnership</h1>
                  <p className='text-[35px] lg:font-bold font-bold lg:text-[35px]'>Meet our partners</p>
                  <p className='w-[90vw] text-[#54595F]'>Our company was founded in 2020.
                     We work daily to become better and we are ready to share best practices.
                  </p>
            </div>
            <div className='flex lg:flex items-center gap-[10px] lg:gap-[50px] '>
                    <img className='w-[16vw] lg:w-[10vw]' src="/logo-crypto-5-300x69.png" alt="" />
                    <img className='w-[16vw] lg:w-[10vw]'src="/logo-23-crypto-6-300x74.png" alt="" />
                    <img className='w-[16vw] lg:w-[10vw]'src="/logo-crypto-2-300x94.png" alt="" />
                    <img className='w-[16vw] lg:w-[10vw]'src="/logo-crypto-3-300x74.png" alt="" />
                    <img className='w-[16vw] lg:w-[10vw]'src="/logo-crypto-4-300x51.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Partnership