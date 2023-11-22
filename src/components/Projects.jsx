import React from 'react'
import ProjectLeftComponent from './ProjectLeftComponent'
import ProjectRightComponent from './ProjectRightComponent'

function Projects() {
	return (
		<div id='projects' className='scroll-smooth w-screen p-5 pb-12 flex flex-col items-center bg-white dark:bg-[#1b1b1b]'>

			{/* Title */}
			<div className='lg:w-[880px] flex flex-col gap-5 pb-10 pt-16 max-lg:justify-center max-lg:items-center'>
				<h1 className='text-lg font-bold text-blue'>PORTFOLIO</h1>
				<p className='text-xl font-bold max-lg:text-center dark:text-white'>Each project is a unique piece of development</p>
			</div>

			{/* Projects */}
			<div className='flex flex-col items-center gap-10'>

				{/* Transcendence */}
					<ProjectRightComponent 
						title="TRANSCENDENCE"
						content="Modern twist of Pong with the tech stack below by a team of 5 using Azure Devops and AGILE/SCRUM for team management. Features real-time matchmaking, integrated chat, and more with an intuitive UI/UX I made."
						githubLink="https://github.com/zackarydevove/transcendence"
						demoLink=""
						tech={['Next', 'Typescript', 'Tailwind', 'Zustand', 'Nest', 'Postgre', 'Prisma', 'Socket.io']}
						img="bg-transcendence"
					/>

					{/* Zacktech */}
					<ProjectLeftComponent 
						title="ZACKTECH"
						content="An E-commerce web app built with React, Tailwind, Node, Express and MongoDB. Users can easily create an account, browse the shop and securely make purchases through Stripe payments."
						githubLink="https://github.com/zackarydevove/zacktech"
						demoLink="https://ecom-app-tan.vercel.app/"
						tech={['React', 'Tailwind', 'Node', 'Express', 'MongoDB']}
						img="bg-zacktech"
					/>

				{/* Twitter clone */}
				<ProjectRightComponent 
					title="TWITTER CLONE"
					content="Twitter clone built with React, Tailwind, Node, Express, MongoDB and Socket.io. User can create, reply, share and like posts. Connect with friends through instant messaging chat using Socket.io."
					githubLink="https://github.com/zackarydevove/twitterClone"
					demoLink="https://social-media-app-ruby.vercel.app/"
					tech={['React', 'Tailwind', 'Node', 'Express', 'MongoDB', 'Socket.io']}
					img="bg-twitter-clone"
				/>

				{/* Soliswap */}
				<ProjectLeftComponent 
					title="SOLISWAP"
					content="Soliswap is a Decentralized Exchange inspired by Uniswap, developed to deepen my understanding of the web3 stack. Deployed on the Ethereum testnet, it enables users to swap cryptocurrencies, manage liquidity pools, and engage in staking and farming with their LPs."
					githubLink="https://github.com/zackarydevove/soliswap"
					demoLink=""
					tech={['React', 'Typescript', 'Node', 'Express', 'Postgre', 'Solidity', 'Hardhat', 'ether.js']} 
					img="bg-soliswap"
				/>

				{/* Javamedia
				<ProjectLeftComponent 
					title="JAVAMEDIA"
					content="Fullstack social media app built with Angular, TypeScript, Java, Spring Boot, and PostgreSQL. Features JWT authentication, real-time posts and chat, and more. Rigorously tested with JUnit and Jasmine."
					githubLink="https://github.com/zackarydevove/javamedia"
					demoLink=""
					tech={['Angular', 'Typescript', 'Java', 'Spring', 'Postgre', 'JUnit', 'Jasmine']}
					img="bg-javamedia"
				/> */}

			</div>
			
		</div>

	)
}

export default Projects
