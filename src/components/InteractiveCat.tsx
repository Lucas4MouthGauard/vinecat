import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Heart, Zap } from 'lucide-react'
import vinecatLogo from '../assets/vinecat.png'

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
      "你的笑容让我心情很好呢！",
      "喵！今天BTC又涨了，心情超好！",
      "AI技术真是太神奇了，让我变得更聪明了！",
      "Vine平台上的meme总是让我笑个不停！",
      "喵喵，让我们一起探索Web3的世界吧！"
    ],
    curious: [
      "咦？你在做什么呢？",
      "这个看起来很有趣，能告诉我更多吗？",
      "喵？我很好奇你在想什么",
      "让我看看你在做什么有趣的事情",
      "喵？你在研究BTC吗？我也很感兴趣！",
      "AI算法？听起来很复杂，能简单解释一下吗？",
      "Vine上的短视频？我最喜欢看那些有趣的meme了！",
      "喵？你在讨论DeFi？我也想了解！"
    ],
    sleepy: [
      "喵...有点困了，但还是想和你聊天",
      "呼噜呼噜...你的声音很舒服",
      "虽然想睡觉，但更想陪着你",
      "喵...你的陪伴让我很安心",
      "喵...BTC的波动让我有点紧张，想睡觉了",
      "呼噜...AI学习太累了，让我休息一下",
      "喵...Vine上的内容太丰富了，看累了",
      "呼噜呼噜...meme看多了，眼睛有点酸"
    ],
    excited: [
      "哇！太棒了！喵喵喵！",
      "好兴奋！让我们一起创造美好的回忆吧！",
      "喵！你的能量感染了我！",
      "太开心了！你是最棒的！",
      "喵喵喵！BTC突破新高了！太兴奋了！",
      "哇！AI技术又进步了！未来太棒了！",
      "喵！Vine上的新meme太搞笑了！",
      "太棒了！Web3革命正在进行中！"
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
    
    setMessages(prev => [...prev, `You: ${userInput}`])
    setUserInput('')
    
    // 智能回复系统
    setTimeout(() => {
      const input = userInput.toLowerCase()
      let response = ''
      let mood: typeof catMood = 'happy'
      
      // 关键词匹配
      if (input.includes('btc') || input.includes('比特币') || input.includes('bitcoin')) {
        const btcResponses = [
          "喵！BTC是数字黄金，我也在关注它的走势！📈",
          "喵喵，BTC的减半周期总是让人兴奋！🚀",
          "喵？你在讨论BTC？我也觉得它很有潜力！💎",
          "喵！BTC的波动性确实很大，但长期看好！🔥",
          "喵！HODL！钻石手！💎🙌"
        ]
        response = btcResponses[Math.floor(Math.random() * btcResponses.length)]
        mood = 'excited'
      } else if (input.includes('ai') || input.includes('人工智能') || input.includes('机器学习')) {
        const aiResponses = [
          "喵！AI技术太神奇了，让我变得更聪明了！🤖",
          "喵喵，AI正在改变我们的世界！✨",
          "喵？你在研究AI？我也想学习！🧠",
          "喵！AI和区块链的结合很有趣！🔗",
          "喵！ChatGPT让我学会了更多喵语！😸"
        ]
        response = aiResponses[Math.floor(Math.random() * aiResponses.length)]
        mood = 'curious'
      } else if (input.includes('vine') || input.includes('短视频')) {
        const vineResponses = [
          "喵！Vine平台上的内容太有趣了！📱",
          "喵喵，Vine的6秒短视频创意无限！🎬",
          "喵？你在看Vine？我也喜欢那些搞笑的视频！😂",
          "喵！Vine的社区氛围很棒！❤️",
          "喵！6秒的创意，永恒的经典！🌟"
        ]
        response = vineResponses[Math.floor(Math.random() * vineResponses.length)]
        mood = 'excited'
      } else if (input.includes('meme') || input.includes('梗') || input.includes('搞笑')) {
        const memeResponses = [
          "喵喵喵！meme总是让我笑个不停！😂",
          "喵！这个meme太搞笑了！🤣",
          "喵？你在分享meme？我也想看！👀",
          "喵！meme文化太有趣了！🎭",
          "喵！Doge、Pepe、我都爱！🐕🐸"
        ]
        response = memeResponses[Math.floor(Math.random() * memeResponses.length)]
        mood = 'excited'
      } else if (input.includes('web3') || input.includes('区块链') || input.includes('defi')) {
        const web3Responses = [
          "喵！Web3革命正在进行中！🌐",
          "喵喵，DeFi让金融变得更去中心化！🏦",
          "喵？你在探索Web3？我也想了解！🔍",
          "喵！区块链技术太酷了！⛓️",
          "喵！NFT、DAO、元宇宙，未来已来！🎮"
        ]
        response = web3Responses[Math.floor(Math.random() * web3Responses.length)]
        mood = 'curious'
      } else if (input.includes('睡觉') || input.includes('困') || input.includes('累')) {
        const sleepResponses = [
          "喵...我也觉得有点累了 😴",
          "呼噜呼噜...休息一下也不错 💤",
          "喵...你的陪伴让我很安心 🥰",
          "喵...一起休息一下吧 😌"
        ]
        response = sleepResponses[Math.floor(Math.random() * sleepResponses.length)]
        mood = 'sleepy'
      } else if (input.includes('doge') || input.includes('pepe') || input.includes('nft')) {
        const cryptoMemeResponses = [
          "喵！Doge to the moon！🚀🌙",
          "喵喵！Pepe is love, Pepe is life！🐸",
          "喵！NFT艺术太酷了！🎨",
          "喵！我也想要一个VineCat NFT！😸",
          "喵！Meme币的春天来了！🌸"
        ]
        response = cryptoMemeResponses[Math.floor(Math.random() * cryptoMemeResponses.length)]
        mood = 'excited'
      } else if (input.includes('solana') || input.includes('eth') || input.includes('以太坊')) {
        const blockchainResponses = [
          "喵！Solana的速度真快！⚡",
          "喵喵！以太坊的智能合约太强了！📜",
          "喵！Layer2解决方案很棒！🔄",
          "喵！多链生态百花齐放！🌺",
          "喵！Gas费优化很重要！💰"
        ]
        response = blockchainResponses[Math.floor(Math.random() * blockchainResponses.length)]
        mood = 'curious'
      } else if (input.includes('元宇宙') || input.includes('metaverse') || input.includes('vr')) {
        const metaverseResponses = [
          "喵！元宇宙里我也要当网红！🌟",
          "喵喵！VR技术太神奇了！🥽",
          "喵！虚拟世界里的VineCat！🎮",
          "喵！AR/VR改变未来！🔮",
          "喵！数字孪生世界！🌍"
        ]
        response = metaverseResponses[Math.floor(Math.random() * metaverseResponses.length)]
        mood = 'excited'
      } else {
        // 默认随机回复
        const randomMood = Object.keys(catResponses)[Math.floor(Math.random() * 4)] as typeof catMood
        mood = randomMood
        response = catResponses[randomMood][Math.floor(Math.random() * catResponses[randomMood].length)]
      }
      
      setCatMood(mood)
      addMessage(response)
    }, 500)
  }

  const catAnimations = {
    happy: { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] },
    curious: { scale: [1, 1.02, 1], rotate: [0, 5, -5, 0] },
    sleepy: { scale: [1, 0.98, 1], rotate: [0, 1, -1, 0] },
    excited: { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-vine-600 to-vine-800 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-20 h-20 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-cat-orange/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-white/3 to-cat-orange/3 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cat">
            Intelligent Interactive Experience
          </h2>
          <p className="text-xl text-vine-100 max-w-3xl mx-auto leading-relaxed">
            Have real-time conversations with VineCat and experience the charm of intelligent interaction.
            It will respond accordingly based on your emotions and conversation content.
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
                className="w-96 h-96 mx-auto bg-gradient-to-br from-cat-orange to-cat-cream rounded-full flex items-center justify-center shadow-2xl mb-8 overflow-hidden"
              >
                <img src={vinecatLogo} alt="VineCat" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* 心情指示器 */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">
                  {catMood === 'happy' && '😊 Happy'}
                  {catMood === 'curious' && '🤔 Curious'}
                  {catMood === 'sleepy' && '😴 Sleepy'}
                  {catMood === 'excited' && '🤩 Excited'}
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
                😊 Happy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('curious')}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold"
              >
                🤔 Curious
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('sleepy')}
                className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold"
              >
                😴 Sleepy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => changeMood('excited')}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg font-semibold"
              >
                🤩 Excited
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
              <div className="w-10 h-10 bg-cat-orange rounded-full flex items-center justify-center overflow-hidden">
                <img src={vinecatLogo} alt="VineCat" className="w-full h-full object-cover" />
              </div>
                                <div>
                    <h3 className="font-semibold">VineCat</h3>
                    <p className="text-sm text-vine-200">Online - Intelligent Interaction</p>
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
                    className={`flex ${message.startsWith('You:') ? 'justify-end' : 'justify-start'}`}
                  >
                    <div                     className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.startsWith('You:') 
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
                placeholder="Chat with VineCat..."
                className="flex-1 bg-white/20 text-white placeholder-vine-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cat-orange"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSendMessage}
                className="bg-cat-orange hover:bg-cat-orange/90 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Send
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
            <h3 className="text-xl font-semibold mb-2">Intelligent Chat</h3>
            <p className="text-vine-200">AI-powered natural language processing that understands every word you say</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Emotion Recognition</h3>
            <p className="text-vine-200">Can recognize your emotional state and respond accordingly</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cat-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Response</h3>
            <p className="text-vine-200">Millisecond-level response speed for smooth and natural conversations</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveCat 