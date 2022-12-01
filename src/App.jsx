import './App.css'
import Navbar from './components/Navbar'
import IntroSection from './components/IntroSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import { useRef } from 'react'

function App() {

  const introRef = useRef()
  const aboutRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  return (
    <>
      <div className="App theme-light">
        <Navbar introRef={introRef} aboutRef={aboutRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef}/>
        <IntroSection introRef={introRef}/>
        <AboutSection aboutRef={aboutRef}/>
        <SkillSection skillsRef={skillsRef}/>
        <ProjectSection projectsRef={projectsRef}/>
        <ContactSection contactRef={contactRef}/>
      </div>
    </>
  )
}

export default App


    // <div className="theme-light App">
    //   <div className="bg-bgclr">
    //     <h2 className="text-tclr text-4xl">Hello</h2>
    //   </div>
    // </div>
    // <div className="theme-dark App">
    //   <div className="bg-bgclr">
    //     <h2 className="text-tclr text-4xl">Hello</h2>
    //   </div>
    
    // </div>

    // <div className="theme-light bg-bgclr">
    //   <h4 className="text-tclr text-xl">new hello</h4>
    //   <h4 className="text-red-700 text-xl">new hello</h4>
    // </div>