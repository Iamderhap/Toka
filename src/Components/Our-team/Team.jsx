import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <>
      <div className='flex flex-col items-center gap-[50px]'>
          <div className='flex flex-col text-center items-center gap-[10px]'>
              <h1 className='font-bold text-[25git init
px] text-[#36BB91]'>Our team</h1>
              <p className='font-bold text-[35px]'>Meet our crypto experts</p>
              <p className='w-[90vw]'>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
          </div>

          <div className='lg:flex flex flex-col gap-[70px] rounded-[20px]'>

            <div className='text-center items-center flex flex-col gap-[20px]'>
              <img className='w-[85vw] rounded-[20px]' src="/team-developer.png" alt="Max image" />
              <p className='font-bold text-[20px]'>Max Kent</p>
              <p>Senior developer</p> 
            </div>

            <div className='text-center flex flex-col gap-[10px]'>
              <img className='w-[85vw] rounded-[20px]' src="/team-member-07.png" alt="Moira image" />
              <p className='font-bold text-[20px]'>Moira Anderson</p>
              <p>Founder and CEO</p>
            </div>

            <div className='text-center flex flex-col gap-[10px]'>
                <img className='w-[85vw] rounded-[20px]' src="/team-member-08.png" alt="jeremy image" />
                <p className='font-bold text-[20px]'>Jeremy Gold</p> 
                <p>Financial expert</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Team