import React from 'react'
import Image from 'next/image'

const Team = () => {
  const Teams = [
    {
      img: "/team-developer.png",
      header: "Max Kent",
      content: "Senior developer"
    },
    {
      img: "/team-member-07.png",
      header: "Moira Anderson",
      content: "Founder and CEO"
    },
    {
      img: "/team-member-08.png",
      header: "Jeremy Gold",
      content: "Financial expert"
    },
  ]
  return (
    <>
      <div className='flex flex-col items-center gap-[50px]'>
          <div className='flex flex-col text-center items-center gap-[10px]'>
              <h1 className='font-bold text-[25px] text-[#36BB91]'>Our team</h1>
              <p className='font-bold text-[35px]'>Meet our crypto experts</p>
              <p className='w-[90vw] lg:text-[20px] lg:w-[25vw]'>Our company was founded in 2020. We work daily to become better and we are ready to share best practices.</p>
          </div>

          <div className='lg:flex-row flex flex-col gap-[70px] lg:gap-[20px] rounded-[20px] lg:px-[20px]'>
             {
              Teams.map((n,index)=>(
                <div key={index} className='text-center items-center flex flex-col gap-[20px]'>
                    <img className='w-[85vw] rounded-[20px]' src={n.img} alt="Max image" />
                    <p className='font-bold text-[20px]'>{n.header}</p>
                    <p>{n.content}</p> 
                </div>
                 ))    
             }
          </div>
      </div>
    </>
  )
}

export default Team