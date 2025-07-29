import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Twitter, Instagram, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-vine-800 to-vine-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo和描述 */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-cat-orange rounded-full flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <span className="text-2xl font-bold font-cat">VineCat</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-vine-200 leading-relaxed mb-6 max-w-md"
            >
              VineCat是Vine平台的唯一宠物，承载着Vine文化的记忆和情感。
              我们致力于为用户提供最优质的智能交互体验，让每个瞬间都变得珍贵。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-vine-700 hover:bg-cat-orange rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-vine-700 hover:bg-cat-orange rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-vine-700 hover:bg-cat-orange rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 bg-vine-700 hover:bg-cat-orange rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* 快速链接 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-vine-200 hover:text-cat-orange transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#about" className="text-vine-200 hover:text-cat-orange transition-colors">
                  关于Vine
                </a>
              </li>
              <li>
                <a href="#features" className="text-vine-200 hover:text-cat-orange transition-colors">
                  VineCat特色
                </a>
              </li>
              <li>
                <a href="#interactive" className="text-vine-200 hover:text-cat-orange transition-colors">
                  智能交互
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-vine-200 hover:text-cat-orange transition-colors">
                  视频展示
                </a>
              </li>
            </ul>
          </motion.div>

          {/* 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-vine-200">
              <li>邮箱: hello@vinecat.com</li>
              <li>电话: +1 (555) 123-4567</li>
              <li>地址: Vine Street, Digital City</li>
              <li>工作时间: 24/7 在线</li>
            </ul>
          </motion.div>
        </div>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-vine-700 mt-12 pt-8"
        />

        {/* 版权信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-vine-300 text-sm mb-4 md:mb-0">
            © {currentYear} VineCat. 保留所有权利。
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-vine-300">
            <a href="#" className="hover:text-cat-orange transition-colors">
              隐私政策
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cat-orange transition-colors">
              服务条款
            </a>
            <span>•</span>
            <a href="#" className="hover:text-cat-orange transition-colors">
              Cookie政策
            </a>
          </div>
        </motion.div>

        {/* 特殊声明 */}
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
            <span>for the Vine community</span>
          </div>
          <p className="text-xs text-vine-400 mt-2">
            VineCat - 承载Vine文化记忆的数字宠物
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 