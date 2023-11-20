import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import { MdDoNotDisturb } from 'react-icons/md'

function ProjectRightComponent({ title, content,  githubLink, demoLink, tech, img }) {
	return (
		<div>
			{/* Row */}
			<div className='max-sm:pt-2 max-lg:pt-5 lg:w-[990px] lg:h-[400px] h-auto max-[390px]:h-[850px] max-[240px]:h-[890px] w-[570px] max-lg:min-h-[750px] max-w-[98vw] bg-white dark:text-white dark:bg-[#131313] dark:border dark:border-[#1b1b1b] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl flex max-lg:flex-col-reverse justify-evenly items-center'>

				{/* Text */}
				<div className='max-lg:pt-5 lg:w-[47%] lg:h-[90%] max-w-[90%] w-[300px] h-auto flex flex-col justify-around items-center gap-5 lg:gap-2'>
				<h3 className='font-bold text-center'>{title}</h3>
				<p className='lg:w-[80%] w-[530px] max-w-[90vw] text-center text-lg'>{content}</p>
				{/* Tech */}
				<div className='flex gap-5 max-[390px]:mb-3 max-[390px]:max-w-[95vw] max-[390px]:flex-wrap lg:w-96 flex-wrap justify-center items-center'>
					{
						tech.map((tech, index) => (
							<div key={index} className='w-20 h-10 flex justify-center items-center dark:bg-[#1b1b1b] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>{tech}</div>
						))
					}
				</div>
				{/* Code and Demo */}
				<div className='flex min-[390px]:gap-5 max-[390px]:flex-wrap justify-center items-center p-3'>
					<div className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
					<a href={githubLink} target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
						<p>Code</p>
						<AiFillGithub size={'1.7em'}/>
					</a>
					</div>
					<div className='flex justify-center items-center gap-1 transition duration-300'>
							{
								demoLink ?
								<a href="https://ecom-app-tan.vercel.app/" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
									<p>Live Demo</p>
									<FiExternalLink size={'1.7em'}/>
								</a>
								:
								<div className='flex items-center gap-1'>
									<p>{ demoLink ? 'Live Demo' : 'Not deployed'}</p>
									<MdDoNotDisturb size={'1.7em'}/>
								</div>
							}
					</div>
				</div>
				</div>
				{/* Image */}
				<a href={ demoLink ? demoLink : githubLink} target="_blank" rel="noreferrer"  
				className={`lg:w-[47%] lg:h-[90%] w-[530px] h-[400px] max-lg:max-w-[95vw]  ${img} bg-cover bg-center  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]  rounded-2xl  flex justify-center items-center lg:hover:scale-105 transition relative`}>

				</a>
			</div>
		</div>
	)
}

export default ProjectRightComponent
