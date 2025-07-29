import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Heart, Play, Zap } from 'lucide-react'

const InteractiveCat: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [catMood, setCatMood] = useState<'happy' | 'curious' | 'sleepy' | 'excited'>('happy')
  const [messages, setMessages] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [userInput, setUserInput] = useState('')

  const catResponses = {
    happy: [
      "喵喵喵！很高兴见到你！🐱",
      "今天天气真不错，想和我一起玩耍吗？",
      "我是Vine的唯一宠物VineCat，请多关照！",
      "你的笑容让我心情很好呢！"
    ],
    curious: [
      "咦？你在做什么呢？",
      "这个看起来很有趣，能告诉我更多吗？",
      "喵？我很好奇你在想什么",
      "让我看看你在做什么有趣的事情"
    ],
    sleepy: [
      "喵...有点困了，但还是想和你聊天",
      "呼噜呼噜...你的声音很舒服",
      "虽然想睡觉，但更想陪着你",
      "喵...你的陪伴让我很安心"
    ],
    excited: [
      "哇！太棒了！喵喵喵！",
      "好兴奋！让我们一起创造美好的回忆吧！",
      "喵！你的能量感染了我！",
      "太开心了！你是最棒的！"
    ]
  }

  const changeMood = (newMood: typeof catMood) => {
    setCatMood(newMood)
    addMessage(catResponses[newMood][Math.floor(Math.random() * catResponses[newMood].length)])
  }

  const addMessage = (message: string) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, message])
      setIsTyping(false)
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return
    
    setMessages(prev => [...prev, `你: ${userInput}`])
    setUserInput('')
    
    // 模拟VineCat的智能回复
    setTimeout(() => {
      const randomMood = Object.keys(catResponses)[Math.floor(Math.random() * 4)] as typeof catMood
      setCatMood(randomMood)
      addMessage(catResponses[randomMood][Math.floor(Math.random() * catResponses[randomMood].length)])
    }, 500)
  }

  const catAnimations = {
    happy: { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] },
    curious: { scale: [1, 1.02, 1], rotate: [0, 5, -5, 0] },
    sleepy: { scale: [1, 0.98, 1], rotate: [0, 1, -1, 0] },
    excited: { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-vine-600 to-vine-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cat">
            智能交互体验
          </h2>
          <p className="text-xl text-vine-100 max-w-3xl mx-auto leading-relaxed">
            与VineCat进行实时对话，体验智能交互的魅力。
            它会根据你的情绪和对话内容做出相应的反应。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 猫咪显示区域 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative">
              <motion.div
                animate={catAnimations[catMood]}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-96 h-96 mx-auto bg-gradient-to-br from-cat-orange to-cat-cream rounded-full flex items-center justify-center shadow-2xl mb-8"
              >
                <span className="text-9xl">🐱</span>
              </motion.div>
              
              {/* 心情指示器 */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">
                  {catMood === 'happy' && '😊 开心'}
                  {catMood === 'curious' && '🤔 好奇'}
                  {catMood === 'sleepy' && '😴 困倦'}
                  {catMood === 'excited' && '🤩 兴奋'}
                </span>
              </div>
            </div>

            {/* 心情按钮 */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('happy')}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
              >
                😊 开心
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('curious')}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
              >
                🤔 好奇
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('sleepy')}
                className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold"
              >
                😴 困倦
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('excited')}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg font-semibold"
              >
                🤩 兴奋
              </motion.button>
            </div>
          </motion.div>

          {/* 聊天界面 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-cat-orange rounded-full flex items-center justify-center">
                <span className="text-xl">🐱</span>
              </div>
              <div>
                <h3 className="font-semibold">VineCat</h3>
                <p className="text-sm text-vine-200">在线 - 智能交互中</p>
              </div>
            </div>

            {/* 消息区域 */}
            <div className="h-80 overflow-y-auto mb-4 space-y-3">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.startsWith('你:') ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.startsWith('你:') 
                        ? 'bg-cat-orange text-white' 
                        : 'bg-white/20 text-white'
                    }`}>
                      {message}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/20 text-white px-4 py-2 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 输入区域 */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="和VineCat聊天..."
                className="flex-1 bg-white/20 text-white placeholder-vine-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cat-orange"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="bg-cat-orange hover:bg-cat-orange/90 text-white px-4 py-2 rounded-lg font-semibold"
              >
                发送
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 功能特色 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">智能对话</h3>
            <p className="text-vine-200">基于AI的自然语言处理，理解你的每一句话</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">情感识别</h3>
            <p className="text-vine-200">能够识别你的情绪状态，做出相应的回应</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">实时响应</h3>
            <p className="text-vine-200">毫秒级的响应速度，让对话流畅自然</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveCat 