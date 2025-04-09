import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
