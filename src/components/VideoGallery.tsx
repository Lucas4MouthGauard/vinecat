import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Heart, Share2, MessageCircle } from 'lucide-react'

const VideoGallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      title: "VineCat的日常",
      description: "看看VineCat在Vine平台上的精彩表现",
      thumbnail: "🐱",
      likes: 1234,
      comments: 89,
      shares: 45,
      duration: "6s"
    },
    {
      id: 2,
      title: "智能交互演示",
      description: "VineCat与用户的智能对话体验",
      thumbnail: "🎬",
      likes: 2345,
      comments: 156,
      shares: 78,
      duration: "6s"
    },
    {
      id: 3,
      title: "Vine文化回顾",
      description: "重温Vine平台的经典时刻",
      thumbnail: "📱",
      likes: 3456,
      comments: 234,
      shares: 123,
      duration: "6s"
    },
    {
      id: 4,
      title: "创意无限",
      description: "6秒内的无限创意可能",
      thumbnail: "✨",
      likes: 4567,
      comments: 345,
      shares: 189,
      duration: "6s"
    },
    {
      id: 5,
      title: "社区互动",
      description: "VineCat与Vine社区的温暖互动",
      thumbnail: "💕",
      likes: 5678,
      comments: 456,
      shares: 234,
      duration: "6s"
    },
    {
      id: 6,
      title: "未来展望",
      description: "VineCat引领数字宠物新时代",
      thumbnail: "🚀",
      likes: 6789,
      comments: 567,
      shares: 345,
      duration: "6s"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cat-cream to-vine-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-vine-600 mb-6 font-cat">
            视频展示
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            探索VineCat的精彩视频内容，体验6秒短视频的魅力。
            每个视频都承载着Vine文化的独特记忆。
          </p>
        </motion.div>

        {/* 视频网格 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* 视频缩略图 */}
              <div className="relative h-48 bg-gradient-to-br from-vine-400 to-vine-600 flex items-center justify-center">
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
                  className="text-6xl"
                >
                  {video.thumbnail}
                </motion.div>
                
                {/* 播放按钮 */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-vine-600 ml-1" />
                  </div>
                </motion.div>
                
                {/* 时长标签 */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* 视频信息 */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-vine-700 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {video.description}
                </p>
                
                {/* 互动统计 */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{video.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{video.shares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 特色视频展示 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-vine-500 to-vine-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-cat">
                精选视频：VineCat的诞生
              </h3>
              <p className="text-lg text-vine-100 mb-6 leading-relaxed">
                见证VineCat作为Vine唯一宠物的诞生时刻。
                这个6秒的视频记录了数字宠物历史上的重要一刻，
                展现了Vine平台创新精神的延续。
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cat-orange hover:bg-cat-orange/90 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>观看完整视频</span>
              </motion.button>
            </div>
            
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
                className="w-64 h-64 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <span className="text-8xl">🎬</span>
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
                🐱
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 视频统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-vine-600 mb-2">1000+</div>
            <div className="text-gray-600">总视频数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vine-600 mb-2">50万+</div>
            <div className="text-gray-600">总播放量</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vine-600 mb-2">10万+</div>
            <div className="text-gray-600">总点赞数</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vine-600 mb-2">6秒</div>
            <div className="text-gray-600">经典时长</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoGallery 