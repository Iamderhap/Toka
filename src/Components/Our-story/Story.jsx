import Image from 'next/image'

const Story = () => {
  return (
    <>
        <div className='flex flex-col lg:items-center items-center gap-[10px] text-center py-[30px]'>
                {/* <div className='gap-[10px]'> */}
                    <h3 className='text-[#36BB91] lg:text-[20px] text-[20px] font-bold'>OUR STORY</h3>
                    <h2 className='font-semibold text-[35px] w-[50vw]'>About our company</h2>
                {/* </div> */}
                <div className='flex flex-col items-center gap-[30px]'>
                    <p className='lg:w-[30vw] w-[75vw] leading-9 text-[#54595F]'>Cryptocurrency markets have seen an increase in volume in recent weeks, which is a great opportunity for new traders.</p>
                    <img className='rounded-[30px] w-[90vw]' src="/toka-img.png" alt="image"width={1000} height={900} />
                </div>
        </div>
    </>
  )
}

export default Story