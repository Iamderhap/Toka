import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='py-[30px]'>
             <div className='flex  justify-around'>
                <div className='flex flex-col gap-[15px] bg-[#f4f1b30a]'>
                    <h1>TOKA</h1>
                    <p className='w-[27vw]'>Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.</p>
                </div>
                <div className='flex flex-col gap-[15px] bg-[#ffe4fe43]'>
                  <p>Contact Us</p> 
                  <p>202 Helga Springs Rd, Crawford, TN 38554</p> 
                  <p>Call Us: 800.275.8777</p>
                  <p>alex@company.com</p>
                </div>
                <div className='flex gap-[15px] flex-col bg-[#fff9e855]'>
                    <p>Sign Up for Email Updates</p>
                    <form>
                        <div>
                            <input className='bg-[white]' type="text" name="" id="" placeholder='Your e-mail adress'/>
                            <button>Subscribe</button>
                        </div>
                    </form>
                    <p className='italic text-lg'>Sign up with your email address to receive news and updates</p>
                </div>
             </div>
             <div className='flex justify-around border-t-2 bg-[#e5d1fe3b] px-[30px] m-[50px]'>
                <p>Copyright ©2024 Toka. All rights reserved.</p>
                <div className='flex gap-[15px] bg-[#fbf2d74b]'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Team</p>
                    <p>Shop</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
             </div>
        </footer>
    </>
  )
}

export default Footer