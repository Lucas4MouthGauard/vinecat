import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Twitter } from 'lucide-react'
import vinecatLogo from '../assets/vinecat.png'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-vine-800 to-vine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-12 bg-cat-orange rounded-full flex items-center justify-center overflow-hidden">
              <img src={vinecatLogo} alt="VerdisDoge" className="w-full h-full object-cover" />
            </div>
                          <span className="text-2xl font-bold font-cat">VerdisDoge</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-vine-200 leading-relaxed mb-6 max-w-md mx-auto"
          >
            VerdisDoge is Verdis's only pet, carrying the memories and emotions of Verdis culture.
            We are committed to providing users with the highest quality intelligent interactive experience, making every moment precious.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
                              href="https://x.com/VerdisDoge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-vine-700 hover:bg-cat-orange rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-vine-700 mt-12 pt-8"
        />

        {/* Copyright Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
                    <div className="text-vine-300 text-sm text-center">
            © {currentYear} VerdisDoge. All rights reserved.
          </div>
        </motion.div>

        {/* Special Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8 pt-8 border-t border-vine-700"
        >
          <div className="flex items-center justify-center space-x-2 text-vine-300">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-cat-orange" />
            </motion.div>
            <span>for the Verdis community</span>
          </div>
          <p className="text-xs text-vine-400 mt-2">
            VerdisDoge - Digital pet carrying Verdis cultural memories
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 