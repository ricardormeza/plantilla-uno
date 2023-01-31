import { useState, Suspense } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/service/Services'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Suspense>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
      </Suspense>
    </div>
  )
}

export default App
