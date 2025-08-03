import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import vinecatLogo from '../assets/vinecat.png'

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-vine-400 via-vine-500 to-vine-600">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cat-orange/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cat-cream/20 rounded-full blur-3xl"
        />
        
        {/* Additional Decorative Elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-1/3 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-10 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
        />
        
        {/* Decorative Lines */}
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-cat-orange/30 to-transparent"
        />
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-vine-400/30 to-transparent"
        />
        <motion.div
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cat-cream/30 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 mx-auto mb-8 bg-cat-orange rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
          >
            <img src={vinecatLogo} alt="VerdisDoge" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-cat"
        >
                      VerdisDoge
        </motion.h1>

        {/* Token Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col items-center justify-center">
              {/* Contract Address */}
              <div className="text-center mb-4">
                <div className="bg-vine-800/50 rounded-lg p-4 border border-vine-600/30">
                  <div className="text-sm text-vine-300 mb-2">CA:</div>
                                            <div className="text-lg font-mono text-cat-orange break-all">
                            32pz8zuaKXfaxg4SFjSuwEQ2rXrV9XGFRVXcZ478bonk
                          </div>
                </div>
              </div>
              
              {/* Buy Button */}
              <motion.a
                href="https://letsbonk.fun/token/32pz8zuaKXfaxg4SFjSuwEQ2rXrV9XGFRVXcZ478bonk"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cat-orange to-vine-500 hover:from-cat-orange/90 hover:to-vine-500/90 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 inline-block"
              >
                Buy
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-vine-100"
        >
          Vine's Only Pet, Intelligent Interactive Experience
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const interactiveSection = document.getElementById('interactive')
              if (interactiveSection) {
                interactiveSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-cat-orange hover:bg-cat-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg"
          >
            <Play size={20} />
            Start Experience
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 text-4xl opacity-60"
      >
        🎬
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 text-4xl opacity-60"
      >
        📱
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-40 left-20 text-4xl opacity-60"
      >
        ⭐
      </motion.div>
    </section>
  )
}

export default Hero 