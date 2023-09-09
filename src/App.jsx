import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Section from './components/Section'
import Technologies from './components/technologies'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
function App() {

  return (
      <div>
      <Navbar></Navbar>
      <Section></Section>
      <Hero ></Hero>
      <Section></Section>
      <Projects />
      <Section></Section>
      <Technologies />
      <Section></Section>
      <AboutMe />
      <Section></Section>
      <Footer />
      </div>
  )
}

export default App
