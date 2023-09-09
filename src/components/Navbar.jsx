import Logo2 from '../assets/images/logo2.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {MdOutgoingMail} from 'react-icons/Md'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react';


function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    // Desktop Version
    <div className=' border-b-2 border-white fixed w-full z-50'>
    <div className='sm:flex max-w-screen-2xl h-20 justify-evenly bg-[#0F1624] hidden w-full '>
    {/* logo */}
        <div className='flex justify-center items-center lg:w-[300px] md:[200px]'>
        <a href="#home" className='text-white cursor-pointer flex text'> 
        <img src={Logo2} alt="Logo"  className='h-[40px] w-[40px] md:mr-2 md:h-[34px] md:w-[34px]'/>
        <span className='text-[16px] mt-1'>Portfolio</span></a>
        </div>
        {/* links */}
        <div className='lg:text-xl lg:w-[400px] text-gray-300 flex items-center justify-around md:text-sm gap-4'>
          <a href="#projects" className='cursor-pointer  hover:text-white'>Projects</a>
          <a href="#tech" className='cursor-pointer  hover:text-white'>Tehcnologies</a>
          <a href="#aboutMe" className='cursor-pointer  hover:text-white'>About</a>
        </div>
        {/* Icons */}
        <div className='lg:w-[400px] flex text-white items-center justify-around gap-4 '>
          <a href="https://hamzaoda.github.io/myPortfolio/"><AiFillGithub className=' md:text-[36px] text-[28px]'/></a>
          <a href="mail-to:hamzaalmidany@gmail.com"><MdOutgoingMail className=' md:text-[36px] text-[28px]'/></a>
          <a href=""><AiFillLinkedin className=' md:text-[36px]  text-[28px]'/></a>
        </div>
    </div>
    {/* Mobile Version */}
    <div className='flex flex-col sm:hidden justify-between bg-[#0F1624] border-b border-white'>
    <div className='flex'>
    <div className='flex py-5 flex-grow justify-center items-center lg:w-[300px] md:[200px] border-b border-white'>
        <a href="#home" className='text-white cursor-pointer flex text'> 
        <img src={Logo2} alt="Logo"  className='h-[30px] w-[30px] md:mr-2 md:h-[24px] md:w-[24px]'/>
        <span className='text-[18px] mt-1 md:text=[12px] ml-4 '>Portfolio</span></a>
        </div>
        <div className='flex items-center justify-center cursor-pointer border-b border-white'onClick={()=> setToggle(!toggle)}><GiHamburgerMenu className='text-white mr-12 text-[28px]'/> </div>
        </div>
        {/* links */}
        {toggle ? 
        (<div className='flex flex-col justify-around items-center relative w-[100%] h-[400px]' onClick= {()=>setToggle(!toggle)}>
        
          <div className='lg:text-xl  text-gray-300 flex flex-col items-center justify-center md:text-sm gap-8'>
          <a href="#projects" className='cursor-pointer  hover:text-white'>Projects</a>
          <a href="#tech" className='cursor-pointer  hover:text-white'>Tehcnologies</a>
          <a href="#aboutMe" className='cursor-pointer  hover:text-white'>About</a>
        </div>
        {/* Icons */}
        <div className='lg:w-[400px] flex text-white items-center justify-around gap-10 '>
          <a href="https://hamzaoda.github.io/myPortfolio/"><AiFillGithub className='text-[36px] '/></a>
          <a href="mail-to:hamzaalmidany@gmail.com"><MdOutgoingMail className='text-[36px] '/></a>
          <a href=""><AiFillLinkedin className='text-[36px] '/></a>
        </div>
        </div>) : (<>
            {/* logo */}
        </>)}
    </div>
    </div>
  )
}

export default Navbar
