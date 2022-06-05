import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Plantilla Uno</h1>
      <About/>
      <Contact/>
      <Experience/>
      <Testimonials/>
    </div>
  )
}

export default App
