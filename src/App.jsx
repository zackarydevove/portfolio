import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import FirstPage from './components/FirstPage';
import ContactMe from './components/ContactMe';
import Projects from './components/Projects';

function App() {

  return (
    <div className='overflow-hidden font-h1'>

      <Navbar />

			<FirstPage />

			<AboutMe />

			<MySkills />

			<Projects />

			<ContactMe />

      <Footer />

    </div>
  );
}

export default App;
