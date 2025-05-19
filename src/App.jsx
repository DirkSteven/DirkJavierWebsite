import { useState } from 'react'
import NavBar from './components/NavBar'
import MeSection from './components/MeSection'
import ProjectSection from './sections/ProjectSection'
import MyStack from './components/MyStack'
import AboutMe from './components/AboutMe'
import CollaborateWithMe from './components/CollaborateWithMe'
import MyFooter from './components/MyFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <NavBar/>
      <section id="home">
      <MeSection/>
      </section>
      <ProjectSection/>
      <MyStack/>
      <AboutMe/>
      <CollaborateWithMe/>
      <MyFooter/>
    </>
  )
}

export default App
