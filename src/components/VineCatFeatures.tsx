import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Zap, Star, Crown } from 'lucide-react'

const VineCatFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "智能交互",
      description: "VineCat能够理解你的情绪，提供个性化的互动体验",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "实时响应",
      description: "毫秒级的响应速度，让每一次互动都流畅自然",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "独特个性",
      description: "作为Vine的唯一宠物，拥有独一无二的性格特征",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "王者地位",
      description: "在Vine生态中享有特殊地位，是真正的数字宠物之王",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-vine-50 to-cat-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vine-600 mb-6 font-cat">
            VineCat 特色
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            作为Vine的唯一宠物，VineCat拥有独特的智能交互能力，
            为Vine社区带来全新的数字宠物体验。
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
                <img src="/images/vinecat.png" alt="VineCat" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* 装饰性元素 */}
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
              <h3 className="text-2xl font-bold text-vine-700 mb-4">为什么选择VineCat？</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>唯一性：Vine生态中独一无二的数字宠物</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>智能性：基于AI的个性化交互体验</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>情感性：能够理解和回应用户的情感需求</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-cat-orange rounded-full"></span>
                  <span>文化性：承载Vine平台的文化记忆和情感</span>
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
            className="bg-gradient-to-r from-cat-orange to-vine-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            开始与VineCat互动
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default VineCatFeatures 