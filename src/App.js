import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub, AiFillHtml5, AiFillApi, AiFillCaretDown } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi';
import { FaMapMarkedAlt, FaTools } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='overflow-hidden font-h1'>
      <Navbar />
      {/* Page 1 */}
      <div id='home' className='scroll-smooth max-sm:py-20 sm:h-screen bg-grey_bg flex justify-center items-center'>
        <div>
          {/* Text */}
          <div className='max-sm:px-10 sm:w-auto flex max-w-screen max-lg:flex-col-reverse justify-center items-center gap-16'>
            <div className='flex flex-col gap-6 justify-center max-lg:items-center'>
              <h1 className='text-4xl sm:text-7xl sm:w-[490px] text-dark_grey font-h1 font-bold max-lg:text-center'>Fullstack Web Developer</h1>
              <p className='text-lg sm:text-xl text-light_grey sm:w-[25rem] max-lg:text-center'>Hi, I'm DEVOVE Zackary. A passionate Fullstack Web Developer based in Paris 📍</p>
              <div className='flex gap-2'> 
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
            <div className='sm:w-80 sm:h-80 lg:w-96 lg:h-96 w-[70vw] h-[70vw] shadow-2xl rounded-full overflow-hidden relative bg-profile bg-[length:500px] max-[210px]:bg-[length:170px] max-[280px]:bg-[length:250px] max-[355px]:bg-[length:300px] max-[450px]:bg-[length:350px] sm:bg-[length:400px] bg-center bg-no-repeat'/>
              {/* <div className='w-[1200px] h-[1200px] bg-profile bg-top bg-no-repeat absolute max-[350px]:-right-[460px] max-[350px]:-bottom-[560px] max-[455px]:-right-[425px] max-[455px]:-bottom-[520px] max-[524px]:-right-[395px] max-[524px]:-bottom-[450px] sm:-right-[400px] sm:-bottom-[470px] lg:-right-[365px] lg:-bottom-[420px] scale-50' /> */}
          </div>

        </div>
        <a className='max-lg:hidden flex justify-center items-center absolute bottom-12 left-[50%] translate-x-[-50%] w-12 h-12 bg-dark_grey text-white rounded-full hover:bg-grey_bg hover:text-dark_grey transition duration-300'
          href='#about'>
          <AiFillCaretDown size={'1.5em'}/>
        </a>
      </div>

      {/* Page 2 */}
      <div id='about' className='scroll-smooth lg:min-h-[63vh] bg-white p-10 max-lg:py-12 flex max-lg:flex-col justify-center items-center gap-24'>
        <div className='max-lg:hidden w-[430px] h-96 bg-desk bg-cover bg-center bg-no-repeat rounded-3xl'/>

        <div className='sm:w-[600px] sm:h-96 lg:pr-5 flex flex-col items-start justify-between max-lg:items-center max-lg:justify-center gap-5'>
          <h1 className='text-blue font-bold'>ABOUT ME</h1>
          <h2 className='text-4xl font-bold font-h1 max-lg:text-center'>A dedicated Fullstack Web Developer based in Paris</h2>
          <div>
            <p className='text-xl w-full font-h1 text-justify text-light_grey max-lg:text-center'>Hi, I'm DEVOVE Zackary, a 21-year-old Full Stack Web Developer based in Paris. I'm proficient in the skills listed below and I am actually student in School 42 Paris. I hold a Bachelor's degree in Economics and Management, and have studied abroad at Seoul National University. I'm fluent in both French and English and I'm passionate about Coding, MMA, Gym, YouTube, Business, and Economics. I thrive in collaborative and challenging environments and always seek to create elegant and scalable solutions. Let's work together!</p>
          </div>
        </div>
      </div>

      {/* Page 3 */}
      <div id='skills' className='scroll-smooth w-screen lg:h-[75vh] bg-grey_bg p-20 flex flex-col items-center gap-16'>
        {/* Title */}
        <div className='w-full flex justify-center'>
          <h1 className='text-4xl font-bold text-center'>My Skills</h1>
        </div>

        {/* Skills */}
        <div className='w-full flex max-lg:flex-col gap-16 max-w-screen justify-center items-center'>
          {/* FrontEnd */}
          <div className='flex flex-col w-1/3 max-w-[384px]'>
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
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
          {/* BackEnd */}
          <div className='flex flex-col w-1/3 max-w-[384px]'>
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
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>REST API</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
          {/* More */}
          <div className='flex flex-col w-1/3 max-w-[384px]'>
            <div className='flex flex-col items-center justify-center gap-5'>
              <div className='w-36 h-36 bg-dark_grey rounded-full flex justify-center items-center'>
                <FaTools className='w-[60%] h-[60%] text-white rounded-full'/>
              </div>
              <p className='text-xl font-bold'>More</p>
            </div>
            {/* List */}
            <div className='flex flex-col justify-center items-center'>
              <hr className='w-[90vw] sm:w-[578px] lg:w-[100%] m-5'/>
              <ul className='flex flex-col gap-3 items-center'>
                <li>Authentication</li>
                <li>Payments</li>
                <li>Socket</li>
                <li>Git</li>
                <li>Docker</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Page 4 */}
      <div id='projects' className='scroll-smooth w-screen p-5 pb-12 flex flex-col items-center bg-white'>

        {/* Title */}
        <div className='lg:w-[880px] flex flex-col gap-5 pb-10 pt-16 max-lg:justify-center max-lg:items-center'>
          <h1 className='text-lg font-bold text-blue'>PORTFOLIO</h1>
          <p className='text-xl font-bold max-lg:text-center'>Each project is a unique piece of development</p>
        </div>

        {/* Projects */}
        <div className='flex flex-col items-center gap-10'>
          
        {/* Project 1 */}
        <div className='p-3'>
          {/* Row */}
          <div className='lg:w-[990px] lg:h-[400px] h-auto max-[390px]:h-[850px] max-[240px]:h-[890px] w-[570px] max-lg:min-h-[750px] max-w-[98vw] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl flex max-lg:flex-col justify-evenly items-center'>
            {/* Image */}
            <a href="https://ecom-app-tan.vercel.app/" target="_blank" rel="noreferrer" 
              className='lg:w-[47%] lg:h-[90%] sm:w-[530px] h-[400px] max-sm:h-[50vh] w-[95%]  bg-project1 bg-cover  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl hover:scale-105 transition'/>
            {/* Text */}
            <div className='lg:w-[47%] lg:h-[90%] max-w-[90%] w-[300px] h-auto flex flex-col justify-around items-center  gap-5 lg:gap-2'>
              <h3 className='font-bold text-center'>ZACKTECH</h3>
              <p className='lg:w-[80%] w-[530px] max-w-[90vw] text-center text-lg'>An E-commerce web app built with the MERN stack. Users can easily create an account, browse the shop and securely make purchases through Stripe payments.</p>
              {/* Tech */}
              <div className='flex gap-5 max-[390px]:mb-3 max-[390px]:max-w-[95vw] max-[390px]:flex-wrap justify-center items-center'>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>MERN</div>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>Tailwind</div>
              </div>
              {/* Code and Demo */}
              <div className='flex min-[390px]:gap-5 max-[390px]:flex-wrap justify-center items-center p-3'>
                <a href="https://github.com/zackarydevove/ecomApp" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <p>Code</p>
                  <AiFillGithub size={'1.7em'}/>
                </a>
                <a href="https://ecom-app-tan.vercel.app/" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <p>Live Demo</p>
                  <FiExternalLink size={'1.7em'}/>
                </a>
              </div>
            </div>
          </div>
        </div>
          
        {/* Project 2 */}
        <div>
          {/* Row */}
          <div className='lg:w-[990px] lg:h-[400px] h-auto max-[390px]:h-[850px] max-[240px]:h-[890px] w-[570px] max-lg:min-h-[750px] max-w-[98vw] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl flex max-lg:flex-col-reverse justify-evenly items-center'>

            {/* Text */}
            <div className='lg:w-[47%] lg:h-[90%] max-w-[90%] w-[300px] h-auto flex flex-col justify-around items-center gap-5 lg:gap-2'>
              <h3 className='font-bold text-center'>FULLSTACK TWITTER CLONE</h3>
              <p className='lg:w-[80%] w-[530px] max-w-[90vw] text-center text-lg'>Twitter clone built with the MERN Stack and Tailwind. User can create, reply, share and like posts. Connect with friends through instant messaging chat using Socket.io and more all in one place.</p>
              {/* Tech */}
              <div className='flex gap-5 max-[390px]:mb-3 max-[390px]:max-w-[95vw] max-[390px]:flex-wrap justify-center items-center'>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] '>MERN</div>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>Tailwind</div>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>Socket.io</div>
              </div>
              {/* Code and Demo */}
              <div className='flex min-[390px]:gap-5 max-[390px]:flex-wrap justify-center items-center p-3'>
                <div className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <a href="https://github.com/zackarydevove/socialMediaApp" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                    <p>Code</p>
                    <AiFillGithub size={'1.7em'}/>
                  </a>
                </div>
                <div className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <a href="https://social-media-app-ruby.vercel.app/" target="_blank" rel="noreferrer" className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                    <p>Live Demo</p>
                    <FiExternalLink size={'1.7em'}/>
                  </a>
                </div>
              </div>
            </div>
            {/* Image */}
            <a href="https://social-media-app-ruby.vercel.app/" target="_blank" rel="noreferrer"  
              className='lg:w-[47%] lg:h-[90%] w-[530px] h-[400px] max-lg:max-w-[95vw]  bg-project2 bg-cover bg-center  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl hover:scale-105 transition'/>
          </div>
        </div>

          
        {/* Project 3 */}
        <div>
          {/* Row */}
          <div className='lg:w-[990px] lg:h-[400px] h-auto max-[390px]:h-[850px] max-[240px]:h-[890px] w-[570px] max-lg:min-h-[750px] max-w-[98vw] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl flex max-lg:flex-col justify-evenly items-center'>
            {/* Image */}
            <a href="#" target="_blank" rel="noreferrer"  
              className='lg:w-[47%] lg:h-[90%] w-[530px] h-[400px] max-w-[95vw]  bg-black bg-cover bg-center  shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] rounded-2xl flex justify-center items-center hover:scale-105 transition'>
              <h1 className='text-white text-center text-3xl font-bold'>SOON</h1>
            </a>
            {/* Text */}
            <div className='lg:w-[47%] lg:h-[90%] max-w-[90%] w-[300px] h-auto flex flex-col justify-around items-center gap-5 lg:gap-2'>
              <h3 className='font-bold'>RESERVATION APP</h3>
              <p className='lg:w-[80%] w-[530px] max-w-[90vw] text-center text-lg'>Reservation App built with the PERN Stack, Redux, Tailwind and GraphQL Search for available rooms, book them seamlessly and even list your own rooms for rent.</p>
              {/* Tech */}
              <div className='flex gap-5 max-[390px]:mb-3 max-[390px]:max-w-[95vw] max-[390px]:flex-wrap justify-center items-center'>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>PERN</div>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>Redux</div>
                <div className='w-20 h-10 flex justify-center items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]'>GraphQL</div>
              </div>
              {/* Code and Demo */}
              <div className='flex min-[390px]:gap-5 max-[390px]:flex-wrap justify-center items-center p-3'>
                <div className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <p>Code</p>
                  <AiFillGithub size={'1.7em'}/>
                </div>
                <div className='flex justify-center items-center gap-1 hover:text-blue hover:cursor-pointer transition duration-300'>
                  <p>Live Demo</p>
                  <FiExternalLink size={'1.7em'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </div>

      {/* Page 5 */}
      <div id='contact' className='scroll-smooth w-screen px-5  bg-grey_bg py-24 flex flex-col justify-center items-center gap-10'>

        <div className='w-[880px] max-w-full h-auto flex flex-col max-lg:justify-center max-lg:items-center gap-5'>
          <h1 className='font-bold text-blue'>CONTACT ME</h1>
          <h2 className='text-4xl font-bold max-sm:text-center'>Don't be shy! Hit me up! 👇 </h2>
        </div>

        <div className='w-[880px] max-w-full flex max-md:flex-col max-lg:justify-center max-lg:items-center gap-10'>
          {/* Location */}
          <div className='w-auto h-auto flex items-center gap-5 max-md:flex-col max-md:justify-center'>
            <div className='w-24 h-24 shadow-xl rounded-full flex justify-center items-center text-blue'>
              <FaMapMarkedAlt size="2.5em"/>
            </div>
            <div className='w-[150px] flex flex-col max-md:items-center '>
              <p className='font-bold text-xl'>Location</p>
              <p className='text-lg max-sm:text-center'>Paris, France</p>
            </div>
          </div>

          {/* Mail */}
          <div className='w-auto h-auto flex items-center gap-5 max-md:flex-col max-md:justify-center'>
            <div className='w-24 h-24 shadow-xl rounded-full flex justify-center items-center text-blue'>
              <GrMail size='2.5em'/>
            </div>
            <div className='flex flex-col max-md:items-center'>
              <p className='font-bold text-xl'>Email</p>
              <p className='text-lg'>Zackary.devove@hotmail.com</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
