import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Wallet } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import vinecatLogo from '../assets/vinecat.png'

interface Section {
  id: string
  name: string
}

interface HeaderProps {
  sections: Section[]
  currentSection: string
  onSectionChange: (sectionId: string) => void
  onWalletClick: () => void
}

const Header: React.FC<HeaderProps> = ({ sections, currentSection, onSectionChange, onWalletClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-cat-orange rounded-full flex items-center justify-center overflow-hidden">
              <img src={vinecatLogo} alt="VerdisDoge" className="w-full h-full object-cover" />
            </div>
            <span className={`text-xl font-bold font-cat ${
              isScrolled ? 'text-vine-600' : 'text-white'
            }`}>
              VerdisDoge
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSectionChange(section.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === section.id
                    ? 'text-cat-orange bg-cat-orange/10'
                    : isScrolled
                    ? 'text-vine-600 hover:text-cat-orange'
                    : 'text-white hover:text-cat-orange'
                }`}
              >
                {section.name}
              </motion.button>
            ))}
            
            {/* Wallet Connect Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onWalletClick}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                isScrolled
                  ? 'bg-cat-orange text-white hover:bg-cat-orange/90'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span>Connect Wallet</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-vine-600' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 overflow-hidden"
            >
                              <div className="px-2 pt-2 pb-3 space-y-1">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        onSectionChange(section.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                        currentSection === section.id
                          ? 'text-cat-orange bg-cat-orange/10'
                          : 'text-vine-600 hover:text-cat-orange hover:bg-cat-orange/5'
                      }`}
                    >
                      {section.name}
                    </motion.button>
                  ))}
                  
                                        {/* Mobile Wallet Button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onWalletClick()
                      setIsMobileMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-vine-600 hover:text-cat-orange hover:bg-cat-orange/5 flex items-center space-x-2"
                  >
                    <Wallet className="w-4 h-4" />
                    <span>Connect Wallet</span>
                  </motion.button>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 