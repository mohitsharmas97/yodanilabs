import React from 'react'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import DemoProjects from './components/DemoProjects'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <DemoProjects />
      <WhyChooseUs />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
