import React from 'react'

const Beginner = () => {
  return (
    <>
        <div className='lg:flex flex-col font-bold flex items-center justify-center gap-[50px] py-[50px] text-center'>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7mjd2Qwqgd0?si=f05yOoYhBtBYUt-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='flex flex-col gap-[25px] bg-[#f3eafd2a] items-center'>
                 <h1 className='font-bold text-[#36BB91] '>FOR BEGINNERS</h1>
                 <h3 className='lg:text-[40px] lg:font-bold lg:w-[30vw] text-[30px] w-[70vw]'>Watch our crypto guide for beginners</h3>
                   <div className='flex flex-col gap-[30px]'>
                        <p className='lg:w-[28vw] leading-8 text-[#7A7A7A] w-[90vw]'>Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies using our crypto trading app.
                            The Bitcoin and cryptocurrency markets have experienced a surge in volume recently, making it an exciting time to become a trader.
                            Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.
                        </p>
                        <div>
                                <button className='border-[#7A7A7A]} border-[2px] px-[40px] py-[15px] rounded-[30px] text-[15px] font-bold hover:bg-black transition-colors duration-700 hover:text-[white]'>Learn More</button>
                        </div>
                   </div>
            </div>
        </div>
    </>
  )
}

export default Beginner