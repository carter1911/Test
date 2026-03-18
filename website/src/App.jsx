import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import TrainingAcademy from './pages/TrainingAcademy'
import Results from './pages/Results'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<TrainingAcademy />} />
          <Route path="/results" element={<Results />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
