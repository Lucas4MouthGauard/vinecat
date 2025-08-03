import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Zap, Star, Crown } from 'lucide-react'
import vinecatLogo from '../assets/vinecat.png'

const VerdisDogeFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Intelligent Interaction",
              description: "VerdisDoge can understand your emotions and provide personalized interactive experiences",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Response",
      description: "Millisecond-level response speed makes every interaction smooth and natural",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Unique Personality",
              description: "As Verdis's only pet, it possesses unique personality traits",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Royal Status",
              description: "Enjoys special status in the Verdis ecosystem, truly the king of digital pets",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-vine-50 to-cat-cream relative overflow-hidden">
                    {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-cat-orange/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-vine-400/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-cat-orange/3 to-vine-400/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vine-600 mb-6 font-cat">
            VerdisDoge Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As Verdis's only pet, VerdisDoge possesses unique intelligent interaction capabilities,
            bringing a new digital pet experience to the Verdis community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 mx-auto bg-gradient-to-br from-cat-orange to-cat-cream rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
              >
                                      <img src={vinecatLogo} alt="VerdisDoge" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 text-3xl"
              >
                ⭐
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 text-3xl"
              >
                🎬
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-vine-700 mb-4">Why Choose VerdisDoge?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>Uniqueness: The only digital pet in the Verdis ecosystem</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>Intelligence: AI-powered personalized interactive experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>Emotional: Can understand and respond to user emotional needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>Cultural: Carries the cultural memories and emotions of the Verdis platform</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:shadow-lg transition-shadow`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-vine-700 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
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
            className="bg-gradient-to-r from-cat-orange to-vine-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Interacting with VerdisDoge
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default VerdisDogeFeatures 