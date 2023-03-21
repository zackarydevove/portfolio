import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <div className="fixed top-0 left-0 p-5 w-full h-auto bg-white shadow-md flex justify-between items-center px-50px py-25px sm:px-40px text-lg z-10">
    <h3 className='z-10 cursor-pointer text-xl font-bold text-dark_grey'>Zack.dev</h3>
    {
      open ?
      <RxCross1 size={'1.3em'} className='sm:hidden z-10' onClick={() => setOpen(false)}/>
      : <GiHamburgerMenu size={'1.3em'} className='sm:hidden z-10' onClick={() => setOpen(true)}/>
    }
    {
      open ?
      
      <div className='w-screen h-screen bg-white absolute top-0 left-0'>
        <ul className='flex flex-col gap-5 absolute left-[50%] top-[50vh] translate-y-[-50%] translate-x-[-50%] items-center'>
            <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '
              onClick={() => setOpen(false)}>
              <a href='#home'>Home</a>
            </li> 
            <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '
              onClick={() => setOpen(false)}>
              <a href='#about'>About</a>
            </li> 
            <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '
              onClick={() => setOpen(false)}>
              <a href='#skills'>Skills</a>
            </li>
            <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '
              onClick={() => setOpen(false)}>
              <a href='#projects'>Projects</a>
            </li>
            <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '
              onClick={() => setOpen(false)}>
              <a href='#contact'>Contact</a>
            </li>
        </ul>
      </div>

      : null
    }
    <ul className='flex gap-5 max-sm:hidden'>
        <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '>
          <a href='#home'>Home</a>
        </li> 
        <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '>
          <a href='#about'>About</a>
        </li> 
        <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '>
          <a href='#skills'>Skills</a>
        </li>
        <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '>
          <a href='#projects'>Projects</a>
        </li>
        <li className='cursor-pointer text-xl font-bold text-dark_grey hover:text-blue transition duration-300 '>
          <a href='#contact'>Contact</a>
        </li>
    </ul>
</div>

  )
}

export default Navbar
