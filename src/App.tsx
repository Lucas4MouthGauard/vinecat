import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutVine from './components/AboutVine'
import VineCatFeatures from './components/VineCatFeatures'
import InteractiveCat from './components/InteractiveCat'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const sections = [
    { id: 'home', name: '首页' },
    { id: 'about', name: '关于Vine' },
    { id: 'features', name: 'VineCat特色' },
    { id: 'interactive', name: '智能交互' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-vine-50 via-vine-100 to-vine-200">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header sections={sections} currentSection={currentSection} onSectionChange={scrollToSection} />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <AboutVine />
            </section>
            
            <section id="features">
              <VineCatFeatures />
            </section>
            
            <section id="interactive">
              <InteractiveCat />
            </section>
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App 