import React from 'react'
import { AiFillApi, AiFillHtml5 } from 'react-icons/ai'
import { FaTools } from 'react-icons/fa'

function MySkills() {
	return (
		<div id='skills' className='scroll-smooth w-screen bg-grey_bg dark:bg-[#131313] p-16 flex flex-col items-center gap-16'>
			{/* Title */}
			<div className='w-full flex justify-center'>
				<h1 className='text-4xl font-bold text-center dark:text-white'>My Skills</h1>
			</div>

			{/* Skills */}
			<div className='w-full flex max-lg:flex-col gap-16 max-w-screen justify-center items-center'>
				{/* FrontEnd */}
				<div className='flex flex-col w-1/3 max-w-[384px] dark:text-white'>
					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='w-36 h-36 bg-dark_grey rounded-full flex justify-center items-center'>
							<AiFillHtml5 className='w-[60%] h-[60%] rounded-full text-white'/>
						</div>
						<p className='text-xl font-bold'>FrontEnd</p>
					</div>
					{/* List */}
					<div className='flex flex-col justify-center items-center'>
						<hr className='w-[90vw] sm:w-[578px] lg:w-[100%] m-5'/>
						<ul className='flex flex-col gap-3 items-center'>
							<li className='text-center'>HTML</li>
							<li className='text-center'>CSS</li>
							<li className='text-center'>Javascript</li>
							<li className='text-center'>Typescript</li>
							<li className='text-center'>React</li>
							<li className='text-center'>Next</li>
							<li className='text-center'>Tailwind</li>
							<li className='text-center'>Redux</li>
						</ul>
					</div>
				</div>
				{/* BackEnd */}
				<div className='flex flex-col w-1/3 max-w-[384px] dark:text-white'>
					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='w-36 h-36 bg-dark_grey rounded-full flex justify-center items-center'>
							<AiFillApi className='w-[60%] h-[60%] text-white rounded-full'/>
						</div>
						<p className='text-xl font-bold'>BackEnd</p>
					</div>
					{/* List */}
					<div className='flex flex-col justify-center items-center'>
						<hr className='w-[90vw] sm:w-[578px] lg:w-[100%] m-5'/>
						<ul className='flex flex-col gap-3 items-center'>
							<li className='text-center'>Node</li>
							<li className='text-center'>Express</li>
							<li className='text-center'>Nest</li>
							<li className='text-center'>REST API</li>
							<li className='text-center'>MongoDB</li>
							<li className='text-center'>PostgreSQL</li>
							<li className='text-center'>Prisma</li>
							<li className='text-center'>Socket.io</li>
						</ul>
					</div>
				</div>
				{/* More */}
				<div className='flex flex-col w-1/3 max-w-[384px] dark:text-white'>
					<div className='flex flex-col items-center justify-center gap-5'>
						<div className='w-36 h-36 bg-dark_grey rounded-full flex justify-center items-center'>
							<FaTools className='w-[60%] h-[60%] text-white rounded-full'/>
						</div>
						<p className='text-xl font-bold'>More</p>
					</div>
					{/* List */}
					<div className='flex flex-col justify-center items-center '>
						<hr className='w-[90vw] sm:w-[578px] lg:w-[100%] m-5'/>
						<ul className='flex flex-col gap-3 items-center'>
							<li className='text-center'>Git</li>
							<li className='text-center'>Docker</li>
							<li className='text-center'>Azure</li>
							<li className='text-center'>Jest</li>
							<li className='text-center'>Authentication</li>
							<li className='text-center'>Stripe</li>
							<li className='text-center'>Vercel</li>
							<li className='text-center'>C/C++</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MySkills
