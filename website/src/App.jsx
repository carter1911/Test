import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ToastNotification from './components/ToastNotification'
import ToolsDrawer from './components/ToolsDrawer'
import SitewideLogo from './components/SitewideLogo'
import { NotificationProvider, useNotification } from './context/NotificationContext'
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

const PAGE_NOTIFICATIONS = {
  '/services': {
    type: 'info',
    title: 'Not sure which service fits?',
    message: 'Take the 3-question quiz on the home page to find your perfect package.',
    duration: 7000,
  },
  '/training': {
    type: 'info',
    title: '18 Modules — Ready Now',
    message: 'Full access to the BraveHeart Training Academy. Start anytime.',
    duration: 7000,
  },
  '/results': {
    type: 'success',
    title: 'Real results. Real companies.',
    message: 'See how our clients built scalable revenue engines.',
    duration: 6000,
  },
  '/about': {
    type: 'info',
    title: '10+ Years in the Industry',
    message: 'Learn the story behind BraveHeart Consulting.',
    duration: 6000,
  },
}

function AppNotifications() {
  const { addToast } = useNotification()
  const location = useLocation()
  const [installPrompt, setInstallPrompt] = useState(null)

  // Capture PWA install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  // Show install prompt on mobile after 10s
  useEffect(() => {
    if (!installPrompt) return
    if (sessionStorage.getItem('bh_install_prompted')) return
    const timer = setTimeout(() => {
      addToast({
        type: 'promo',
        title: 'Add to Home Screen',
        message: 'Install BraveHeart Way for quick access on your device.',
        duration: 10000,
        action: {
          label: 'Install App',
          onClick: () => {
            installPrompt.prompt()
            sessionStorage.setItem('bh_install_prompted', '1')
          },
        },
      })
      sessionStorage.setItem('bh_install_prompted', '1')
    }, 10000)
    return () => clearTimeout(timer)
  }, [installPrompt, addToast])

  // Welcome notification on first visit
  useEffect(() => {
    if (sessionStorage.getItem('bh_welcomed')) return
    const timer = setTimeout(() => {
      addToast({
        type: 'promo',
        title: 'Free Strategy Call Available',
        message: '30 minutes with Sekayi — zero fluff, real answers for your business.',
        duration: 9000,
        action: {
          label: 'Book Now',
          onClick: () => { window.location.href = '/contact' },
        },
      })
      sessionStorage.setItem('bh_welcomed', '1')
    }, 5000)
    return () => clearTimeout(timer)
  }, [addToast])

  // Page-specific notifications
  useEffect(() => {
    const msg = PAGE_NOTIFICATIONS[location.pathname]
    if (!msg) return
    const key = `bh_page_${location.pathname.replace(/\//g, '_')}`
    if (sessionStorage.getItem(key)) return
    const timer = setTimeout(() => {
      addToast(msg)
      sessionStorage.setItem(key, '1')
    }, 2500)
    return () => clearTimeout(timer)
  }, [location.pathname, addToast])

  return null
}

export default function App() {
  return (
    <NotificationProvider>
      <SitewideLogo />
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
      <ToolsDrawer />
      <AppNotifications />
      <ToastNotification />
    </NotificationProvider>
  )
}
