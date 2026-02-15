import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Process from './components/Process'



function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About /> 
      <Services />       
      <Process />      
      <Contact />
      <Footer />
    </div>
  )
}

export default App