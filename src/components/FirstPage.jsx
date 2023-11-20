import React from 'react'
import { AiFillCaretDown, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

function FirstPage() {
	return (
		<div id='home' className='scroll-smooth max-sm:py-20 sm:h-screen bg-grey_bg dark:bg-[#131313] flex justify-center items-center'>
			<div>
				{/* Text */}
				<div className='max-sm:px-10 sm:w-auto flex max-w-screen max-lg:flex-col-reverse justify-center items-center gap-16'>
					<div className='flex flex-col gap-6 justify-center max-lg:items-center'>
						<h1 className='text-4xl sm:text-7xl sm:w-[490px] text-dark_grey dark:text-white font-h1 font-bold max-lg:text-center'>Fullstack Developer</h1>
						<p className='text-lg sm:text-xl text-light_grey sm:w-[25rem] max-lg:text-center'>Hi, I'm Zackary Devove. A passionate Fullstack Developer based in Paris 📍</p>
						<div className='flex gap-2 dark:text-white'> 
								<a rel="noreferrer" href={new URL('http://linkedin.com/in/zackarydevove/')} target='_blank'>
									<AiFillLinkedin size='2.3em' className='hover:cursor-pointer hover:text-blue transition duration-300' /> 
								</a>
								<a rel="noreferrer" href={new URL('https://twitter.com/ZackaryDevove')} target='_blank'>
									<AiFillTwitterCircle size='2.3em' className='hover:cursor-pointer hover:text-blue transition duration-300'/>
								</a>
								<a rel="noreferrer" href={new URL('https://github.com/zackarydevove')} target='_blank'>
									<AiFillGithub size='2.3em' className='hover:cursor-pointer hover:text-blue transition duration-300'/>
								</a>
						</div>
					</div>

					{/* Profile Picture */}
					<div className='sm:w-80 sm:h-80 lg:w-96 lg:h-96 w-[70vw] h-[70vw] shadow-2xl rounded-full overflow-hidden relative bg-profile bg-[length:500px] max-[210px]:bg-[length:170px] max-[280px]:bg-[length:250px] max-[355px]:bg-[length:300px] max-[450px]:bg-[length:350px] sm:bg-[length:480px] bg-center bg-no-repeat'/>
						{/* <div className='w-[1200px] h-[1200px] bg-profile bg-top bg-no-repeat absolute max-[350px]:-right-[460px] max-[350px]:-bottom-[560px] max-[455px]:-right-[425px] max-[455px]:-bottom-[520px] max-[524px]:-right-[395px] max-[524px]:-bottom-[450px] sm:-right-[400px] sm:-bottom-[470px] lg:-right-[365px] lg:-bottom-[420px] scale-50' /> */}
				</div>

			</div>
			<a className='max-lg:hidden flex justify-center items-center absolute bottom-12 left-[50%] translate-x-[-50%] w-12 h-12 bg-dark_grey text-white rounded-full hover:bg-grey_bg hover:text-dark_grey transition duration-300'
				href='#about'>
				<AiFillCaretDown size={'1.5em'}/>
			</a>
		</div>
	)
}

export default FirstPage
