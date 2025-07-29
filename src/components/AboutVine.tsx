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
      title: "短视频平台",
      description: "Vine是一个专注于6秒短视频分享的社交媒体平台，让创意无限可能"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "全球社区",
      description: "连接全球创作者，分享生活瞬间，创造独特的数字文化"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "创意无限",
      description: "6秒的限制激发了无限的创意，让每个瞬间都变得珍贵"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "情感连接",
      description: "通过短视频建立真实的情感连接，让世界变得更小更温暖"
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
            关于 Vine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vine是一个革命性的短视频平台，通过6秒的限制重新定义了内容创作。
            在这里，每个瞬间都是艺术，每个创意都值得被看见。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-vine-500 to-vine-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Vine的起源</h3>
              <p className="text-lg leading-relaxed mb-6">
                Vine于2012年由Dom Hofmann、Rus Yusupov和Colin Kroll创立，
                最初是一个6秒循环视频分享应用。这个简单的概念迅速风靡全球，
                成为短视频时代的开创者。
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <div>
                  <div className="font-semibold">6秒循环</div>
                  <div className="text-sm opacity-90">创新的时间限制</div>
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
              <h4 className="text-xl font-semibold text-cat-black mb-3">文化影响</h4>
              <p className="text-gray-700">
                Vine不仅是一个应用，更是一种文化现象。它培养了无数网红，
                创造了无数流行梗，影响了整个社交媒体生态。
              </p>
            </div>
            
            <div className="bg-vine-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-vine-700 mb-3">创意革命</h4>
              <p className="text-gray-700">
                6秒的限制看似简单，却激发了前所未有的创意。从喜剧到音乐，
                从舞蹈到艺术，Vine重新定义了什么是可能的。
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