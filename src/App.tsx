import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
//import Projects from './components/Projects'
import WhyUs from './components/WhyUs' 
//import TechStack from './components/TechStack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BentoGrid from './components/BentoGrid'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      {/*<Projects />*/}
      <About /> 
      <WhyUs />  
      <Process /> 
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App