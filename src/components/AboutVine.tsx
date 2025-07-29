import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Video, Users, TrendingUp, Heart } from 'lucide-react'

const AboutVine: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Short Video Platform",
      description: "Vine was a social media platform focused on 6-second video sharing, making creativity limitless"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Community",
      description: "Connecting creators worldwide, sharing life moments, creating unique digital culture"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Infinite Creativity",
      description: "The 6-second limit inspired unlimited creativity, making every moment precious"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Connection",
      description: "Building genuine emotional connections through short videos, making the world smaller and warmer"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vine-600 mb-6 font-cat">
            About Vine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vine was a revolutionary short-form video platform that redefined content creation through its 6-second limit.
            Here, every moment is art, and every idea deserves to be seen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-vine-500 to-vine-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Origin of Vine</h3>
              <p className="text-lg leading-relaxed mb-6">
                Vine was founded in 2012 by Dom Hofmann, Rus Yusupov, and Colin Kroll,
                initially as a 6-second looping video sharing app. This simple concept quickly went viral worldwide,
                becoming the pioneer of the short-form video era.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <div className="font-semibold">6-Second Loop</div>
                  <div className="text-sm opacity-90">Innovative time constraint</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-cat-cream rounded-xl p-6">
              <h4 className="text-xl font-semibold text-cat-black mb-3">Cultural Impact</h4>
              <p className="text-gray-700">
                Vine was not just an app, but a cultural phenomenon. It nurtured countless influencers,
                created numerous viral memes, and influenced the entire social media ecosystem.
              </p>
            </div>
            
            <div className="bg-vine-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-vine-700 mb-3">Creative Revolution</h4>
              <p className="text-gray-700">
                The 6-second limit seemed simple, but it inspired unprecedented creativity. From comedy to music,
                from dance to art, Vine redefined what was possible.
              </p>
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
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:bg-cat-orange/90 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-vine-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutVine 