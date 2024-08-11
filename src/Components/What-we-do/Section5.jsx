import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
    <>
      <div className='lg:flex lg:items-center lg:gap-[50px] flex flex-col items-center bg-[rgba(0,255,255,0.03)] py-[50px]'>
          <div className='lg:flex flex flex-col justify-center items-center gap-[50px]'>
                <div className='lg:flex flex flex-col gap-[20px] lg:gap-[10px] lg:w-[40vw] w-[85vw]'> 
                      <div>
                          <img className=' lg:w-[50vw] w-[85vw] rounded-[20px] lg:rounded-t-[20px] h-[25vh]' src="/businesspeople.png" alt="business people image" />
                      </div>
                        <div className='lg:flex flex flex-col lg:gap-[10px] gap-[20px]'>
                            <img className='lg:w-[30vw] lg:h-[40vh] h-[30vh] rounded-[20px] lg:rounded-lg' src="/rgrs.png" alt="image" />
                            <img className='lg:w-[30vw] h-[30vh] lg:h-[40vh] rounded-[20px] lg:rounded-lg' src="/man-workings.png" alt="man working image" />
                        </div>
                  </div>
                 <div className='lg:flex flex flex-col items-center lg:flex-col lg:py-[80px] gap-[20px] '>
                      <h1 className='text-[#36BB91] lg:text-[20px] text-[20px] font-bold lg:font-bold'>WHAT WE DO</h1>
                      <p className='font-bold text-[35px] lg:text-[40px] lg:w-[35vw] w-[80vw]'>Millions of users around the world</p>
                      <p className='lg:w-[32vw] text-[#7A7A7A] leading-8 w-[90vw] text-center'>Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app.
                          The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it 
                          an exciting time to become a trader. Cryptocurrency 
                          markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders
                      </p>
                      <div>
                         <button className='bg-[#36BB91] px-[40px] py-[10px] text-[20px] font-bold text-white rounded-lg shadow-lg shadow-[#6EC1E4]'>Start now</button>
                      </div>
                  </div>
            </div>
            <div className='lg:flex flex flex-col gap-[10vw] lg:gap-[5vw] text-center pt-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='lg:text-[50px] text-[35px] font-bold'>80K</h1>
                    <p>Registered investors</p>
                </div>
                <div>
                    <h1 className='lg:text-[50px] text-[35px] font-bold'>150K</h1>
                    <p>Total transactions</p>
                </div>
                <div>
                    <h1 className='lg:text-[50px] text-[35px] font-bold'>25</h1>
                    <p>Total users</p>
                </div>
            </div>
      </div>
    </>
  )
}

export default Section5