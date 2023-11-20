import React from 'react'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

function ContactMe() {
	return (
		<div id='contact' className='scroll-smooth w-screen px-5  bg-grey_bg dark:bg-[#131313] dark:text-white py-24 flex flex-col justify-center items-center gap-10'>

			<div className='w-[880px] max-w-full h-auto flex flex-col max-lg:justify-center max-lg:items-center gap-5'>
				<h1 className='font-bold text-blue'>CONTACT ME</h1>
				<h2 className='text-4xl font-bold max-sm:text-center'>Let's connect and collaborate! 👇 </h2>
			</div>

			<div className='w-[880px] max-w-full flex max-md:flex-col max-lg:justify-center max-lg:items-center gap-10'>
				{/* Location */}
				<div className='w-auto h-auto flex items-center gap-5 max-md:flex-col max-md:justify-center'>
					<div className='w-24 h-24 shadow-xl border border-white rounded-full flex justify-center items-center text-blue'>
						<FaMapMarkedAlt size="2.5em"/>
					</div>
					<div className='w-[150px] flex flex-col max-md:items-center '>
						<p className='font-bold text-xl'>Location</p>
						<p className='text-lg max-sm:text-center'>Paris, France</p>
					</div>
				</div>

				{/* Mail */}
				<div className='w-auto h-auto flex items-center gap-5 max-md:flex-col max-md:justify-center'>
					<div className='w-24 h-24 shadow-xl border border-white rounded-full flex justify-center items-center text-blue'>
						<GrMail size='2.5em'/>
					</div>
					<div className='flex flex-col max-md:items-center'>
						<p className='font-bold text-xl'>Email</p>
						<p className='text-lg'>Zackary.devove@hotmail.com</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ContactMe
