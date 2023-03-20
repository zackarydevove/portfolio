import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='w-screen h-[10vh] flex justify-center items-center bg-dark_grey text-white'>
        <div className='flex w-1/2 h-full justify-between items-center'>
            <p>Copyright © 2023. All rights are reserved</p>
            <div className='flex'>
                <div className='flex gap-3'>
                  <a href={new URL('http://linkedin.com/in/zackarydevove/')} target='_blank'>
                    <AiFillLinkedin size='2em' className='hover:cursor-pointer hover:text-blue transition duration-300' /> 
                  </a>
                  <a href={new URL('https://twitter.com/ZackaryDevove')} target='_blank'>
                    <AiFillTwitterCircle size='2em' className='hover:cursor-pointer hover:text-blue transition duration-300'/>
                  </a>
                  <a href={new URL('https://github.com/zackarydevove')} target='_blank'>
                    <AiFillGithub size='2em' className='hover:cursor-pointer hover:text-blue transition duration-300'/>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
