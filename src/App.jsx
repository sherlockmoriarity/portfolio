import ButtonGradient from './assets/svg/ButtonGradient';

import Header from './components/Header';
import Hero from './components/Hero';
import Collaboration from './components/Collaboration';
import Benefits from './components/Benefits';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <>
    
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
      
      <Header/>
      <Hero/>
      <Collaboration/>
      <Benefits/>
      <Experience/>
      <Contact/>
      
      
    </div>
    <ButtonGradient/>
    </>
  );
};

export default App
