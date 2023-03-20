import React from 'react'

function Navbar() {
  return (
<div className="fixed top-0 left-0 p-5 w-full h-auto bg-white shadow-md flex justify-between items-center px-50px py-25px sm:px-40px text-lg z-10">
    <h3 className='cursor-pointer text-xl font-bold text-dark_grey'>Zack.dev</h3>
    <ul className='flex gap-5'>
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
