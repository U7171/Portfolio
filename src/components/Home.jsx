import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

import pic from "../../public/photo.avif";
// import pic1 from "../../public/photo.photo.jpg"




function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container max-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        <div  className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
          <span className='text-xl'>Welcome In My Feed</span>
          <div className='flex space-x-1 text-2xl md: text-4xl'>
            <h1>Hello, I'm a</h1>
            {/* <span >Developer</span> */}
            <ReactTyped
            className='text-red-700 font-bold'
              // typedRef={setTyped}
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
          />
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>
          Embark on journey of digital transformation with Mr. Ujjal Sikdar, a versatile programmer fluent in Python, C++, C & MERN Stack Development. With 
          a comprehensive skill set and passion for innovation, Ujjal crafts robust solutions tailored to your needs.
          Weather it' s building scalable web applications or optimizing existing system, he is dedicated to delivering
          excellence in every line of code. Elevate your projects with him at the helm.
          </p>
          <br />
          {/*Social Media icons*/}
          <div className='flex justify-between'>
          <div className='space-y-2'>
            <h1 className='font-bold'>Available on</h1>
            <ul className='flex space-x-5'>
              <li>
                <a href="https://www.facebook.com/ujjal.sikdar.391?mibextid=qi2Omg&rdid=dX9WSq0fPI6hfrHw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FkiYEwtz5qMAHGYFe%2F%3Fmibextid%3Dqi2Omg" target='_blank'>
                <FaFacebook className='text-2xl cursor-pointer'/>
                </a>
                </li>
              <li>
                <a href="https://www.linkedin.com/in/ujjal-sikdar-02b814270?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGEkcWDIjT5ilUtzGzUgfJg%3D%3D" target='_blank'>
                  <FaLinkedinIn className='text-2xl cursor-pointer'/>
                  </a>
              </li>
              <li>
                <a href="https://www.instagram.com/u_sikdar_official07?igsh=YXM3ajZ6dHhrdThm" target='_blank'><FaInstagram className='text-2xl cursor-pointer'/></a></li>
              <li><a href="https://youtube.com/@psychotachz9208?si=b17wv7O27TRm1rSD" target='_blank'><FaYoutube className='text-2xl cursor-pointer'/></a></li>
              <li>
                <a href="https://web.telegram.org/k/" target='_blank'><FaTelegram className='text-2xl cursor-pointer'/></a></li>
            </ul>
          </div>
          <div className='space-y-2'>
          <h1 className='font-bold'>Currently Working on</h1>
          <div className='flex space-x-5'>
              <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full'/>
              <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full'/>
              <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full'/>
              <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full'/>
          </div>
          </div>
          </div>
          </div>
          <div className='md:w-1/3 md:ml-48 md:mt-20 order-1'>
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          </div>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Home
