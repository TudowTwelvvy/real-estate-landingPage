import { useState } from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Footer from './components/Footer'
import Services from './sections/Services'
import Clients from './sections/Clients'
DarkModeProvider

function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Footer />
      </DarkModeProvider>
    </>
  )
}

export default App
