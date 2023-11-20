import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    if (!theme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
  <div className="fixed top-0 left-0 p-5 w-full h-auto bg-white dark:bg-[#1b1b1b] text-dark_grey dark:text-white shadow-md flex justify-between items-center px-50px py-25px sm:px-40px text-lg z-10">
    <div>
			<div onClick={toggleTheme}>
				{
					theme ?
					<FaMoon size={'1.3em'} className='hover:cursor-pointer'/>
					:
					<FaSun size={'1.3em'} className='hover:cursor-pointer'/>
				}
			</div>
    </div>
    {
      open ?
      	<RxCross1 size={'1.3em'} className='sm:hidden z-10' onClick={() => setOpen(false)}/>
      : 
				<GiHamburgerMenu size={'1.3em'} className='sm:hidden z-10' onClick={() => setOpen(true)}/>
    }
    {
      open ?
				<div className='w-screen h-screen bg-white dark:bg-[#1b1b1b] absolute top-0 left-0'>
					<ul className='flex flex-col gap-5 absolute left-[50%] top-[50vh] translate-y-[-50%] translate-x-[-50%] items-center'>
							<li className='cursor-pointer text-xl font-bold  hover:text-blue transition duration-300 '
								onClick={() => setOpen(false)}>
								<a href='#home'>Home</a>
							</li> 
							<li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '
								onClick={() => setOpen(false)}>
								<a href='#about'>About</a>
							</li> 
							<li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '
								onClick={() => setOpen(false)}>
								<a href='#skills'>Skills</a>
							</li>
							<li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '
								onClick={() => setOpen(false)}>
								<a href='#projects'>Projects</a>
							</li>
							<li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '
								onClick={() => setOpen(false)}>
								<a href='#contact'>Contact</a>
							</li>
					</ul>
				</div>
      : null
    }
    <ul className='flex gap-5 max-sm:hidden'>
        <li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '>
          <a href='#home'>Home</a>
        </li> 
        <li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '>
          <a href='#about'>About</a>
        </li> 
        <li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '>
          <a href='#skills'>Skills</a>
        </li>
        <li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '>
          <a href='#projects'>Projects</a>
        </li>
        <li className='cursor-pointer text-xl font-bold hover:text-blue transition duration-300 '>
          <a href='#contact'>Contact</a>
        </li>
    </ul>
</div>

  )
}

export default Navbar
