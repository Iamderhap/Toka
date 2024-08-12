import Image from 'next/image'

const Story = () => {
  return (
     <>
        <div className='flex flex-col lg:items-center items-center gap-[10px] text-center py-[30px]'>
                <h2 className='font-semibold text-[30px]'>About IB Trading</h2>
                <div className='flex flex-col items-center gap-[30px]'>
                <img className='rounded-[30px] w-[90vw] lg:w-[50vw] lg:h-[50vh]' src="/trading-certificate.jpg" alt="image"width={1000} height={900} />

                      <p className='lg:w-[43vw] w-[75vw] leading-9 text-[#54595F]'>Welcome to IB Trading Academy, the premier destination for cryptocurrency trading education in Ilorin, 
                          Kwara State. Our academy is dedicated to empowering individuals with the knowledge and skills needed to navigate the exciting world of crypto trading.
                          Whether you are a beginner looking to understand the basics or an experienced trader seeking to enhance your strategies, our 
                          comprehensive courses are designed to meet your needs.
                       </p>
                       <p className='lg:w-[43vw] w-[75vw] leading-9 text-[#54595F]'>
                          At IB Trading Academy, we believe that education is the key to financial freedom.
                          Our expert instructors, who have years of experience in the crypto market, provide hands-on training 
                          and insights into the latest trading techniques. We focus on practical learning, ensuring that our students
                            not only understand the theory but can also apply it effectively in real-world scenarios.
                       </p>
                       <p className='lg:w-[43vw] w-[75vw] leading-9 text-[#54595F]'>
                          Join us today and take the first step towards mastering crypto trading.
                            With our support, you’ll be equipped to make informed decisions,
                            minimize risks, and maximize your trading potential in the fast-evolving digital currency landscape.
                       </p>
                </div>
        </div>
    </>
  )
}

export default Story