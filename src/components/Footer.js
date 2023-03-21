import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'

function Footer() {
  return (
    <div className='w-screen h-[10vh] px-5 flex justify-center items-center bg-dark_grey text-white'>
        <div className='flex w-[900px] h-full justify-between items-center'>
            <p className='max-[270px]:text-xs max-[470px]:text-sm'>Copyright © 2023. All rights are reserved</p>
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
