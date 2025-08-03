import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutVine from './components/AboutVine'
import VerdisDogeFeatures from './components/VerdisDogeFeatures'
import InteractiveCat from './components/InteractiveCat'
import WalletModal from './components/WalletModal'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import BackgroundDecoration from './components/BackgroundDecoration'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Vine' },
    { id: 'features', name: 'VerdisDoge Features' },
    { id: 'interactive', name: 'Interactive' }
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'wallet') {
      setIsWalletModalOpen(true)
      return
    }
    
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
      <BackgroundDecoration />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header 
            sections={sections} 
            currentSection={currentSection} 
            onSectionChange={scrollToSection}
            onWalletClick={() => setIsWalletModalOpen(true)}
          />
          
          <main>
            <section id="home">
              <Hero />
            </section>
            
            <section id="about">
              <AboutVine />
            </section>
            
            <section id="features">
              <VerdisDogeFeatures />
            </section>
            
            <section id="interactive">
              <InteractiveCat />
            </section>
          </main>
          
          {/* 钱包连接弹窗 */}
          <WalletModal 
            isOpen={isWalletModalOpen} 
            onClose={() => setIsWalletModalOpen(false)} 
          />
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App 