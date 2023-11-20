import React from 'react'

function AboutMe() {
	return (
		<div id='about' className='scroll-smooth  bg-white dark:bg-[#1b1b1b] p-10 py-24 max-lg:py-12 flex max-lg:flex-col justify-center items-center gap-24'>
			<div className='max-lg:hidden w-[430px] h-96 bg-desk bg-cover bg-center bg-no-repeat rounded-3xl'/>

			<div className='sm:w-[650px] sm:h-96 lg:pr-5 flex flex-col items-start justify-between max-lg:items-center max-lg:justify-center gap-5'>
				<h1 className='text-blue font-bold'>ABOUT ME</h1>
				<h2 className='text-2xl font-bold font-h1 max-lg:text-center dark:text-white'>A Passionate Fullstack Developer, based in Paris</h2>
				<div>
					<p className='text-xl w-full font-h1 text-justify text-light_grey dark:text-white max-lg:text-center'>Hey there! I'm Zackary DEVOVE, a 21-year-old Fullstack Developer rooted right in the heart of Paris. I'm proficient in the skills listed below and am currently a student at School 42 Paris. With a Bachelor's degree in Economics and Management under my belt, and a transformative stint at Seoul National University, I'm comfortably bilingual in French and English. Beyond the code, I'm deeply immersed in the ever-evolving world of crypto and DeFi. Otherwise, you’ll probably find me at the gym or on an MMA ring. My drive? Crafting a vision into an elegant and scalable digital solution. Ready to collaborate?</p>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
