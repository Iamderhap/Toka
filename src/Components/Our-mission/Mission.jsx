import React from 'react'
import Image from 'next/image'

const Mission = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:gap-[90px] gap-[30px] bg-[#e1e1e234] lg:py-[40px] py-[20px] lg:flex'>
        <div className='lg:flex lg:gap-[100px] gap-[20px] flex flex-col  w-[80vw]'>
            <div className='flex text-center flex-col gap-[5vw]'>
                <p className='font-bold text-[25px] text-[#36BB91]'>Our mission</p>
                <p className='lg:w-[26vw] lg:text-[35px] font-bold text-[30px]'>We are helping people to get a success.</p>
                <p className='lg:w-[32vw] w-[85vw] leading-7 text-center text-[#7A7A7A]'>
                    Invest in Bitcoin, Ethereum, USDT, and other cryptocurrencies 
                    using our crypto trading app. The Bitcoin and cryptocurrency markets have experienced a surge in volume recently,
                     making it an exciting time to become a trader. Cryptocurrency
                     markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.
                </p>
            </div>
        </div>
        <div className='lg:flex lg:gap-[50px] flex flex-col gap-[30px]'>

                 <div className='lg:flex flex flex-col justify-center items-center lg:flex-col lg:gap-[20px] lg:items-center lg:text-center lg:w-[23vw] w-[85vw] lg:py-[40px] py-[40px] bg-white rounded-[30px] gap-[20px]'>
                        <div className='lg:w-[7vw] w-[20vw]'>
                            <img src="/cash-back.png" alt="cash back image" />
                        </div>
                        <h3 className='font-bold text-[25px]'>Transparency</h3>
                        <p className='lg:w-[19vw] text-center w-[80vw] text-[#54595F]'>Cras eu demper neque, sit amet aliquet odio. Donec voluepat enim
                            quis mollis consequat.
                        </p>
                 </div>

             <div className='lg:flex flex flex-col justify-center items-center lg:flex-col lg:gap-[20px] lg:items-center lg:text-center lg:w-[23vw] w-[85vw] lg:py-[40px] py-[40px] bg-white rounded-[30px] gap-[20px]'>
                   <div className='lg:w-[7vw] w-[20vw]'>
                       <img src="/rating.png" alt="rating image" />
                   </div>
                        <h3 className='font-bold text-[25px]'>Exprienced team</h3>
                        <p className='lg:w-[19vw] text-center w-[80vw] text-[#54595F]'>Cras eu demper neque, sit amet aliquet odio. Donec voluepat enim
                            quis mollis consequat.
                        </p>
                    </div>

          <div className='lg:flex flex flex-col justify-center items-center lg:flex-col lg:gap-[20px] lg:items-center lg:text-center lg:w-[23vw] w-[85vw] lg:py-[40px] py-[40px] bg-white rounded-[30px] gap-[20px]'>
                   <div className='lg:w-[7vw] w-[20vw]'>
                       <img  src="/protection.png" alt="protection image" />
              </div>
                        <h3 className='font-bold text-[25px]'>Security garantie</h3>
                        <p className='lg:w-[19vw] text-center w-[80vw] text-[#54595F]'>Cras eu demper neque, sit amet aliquet odio. Donec voluepat enim
                            quis mollis consequat.
                        </p>
                    </div>

        </div>
    </div>
  )
}

export default Mission