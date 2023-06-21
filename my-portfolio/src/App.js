
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
function App() {
  return (
    <div className="App" >
      
         <Navbar/>
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
         <Contact/>
          <Resume/>
          
    </div>
  );
}

export default App;
