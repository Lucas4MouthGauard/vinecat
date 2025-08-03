import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wallet, Shield, Zap, CheckCircle, ExternalLink, Copy, X, FileText } from 'lucide-react'

interface WalletModalProps {
  isOpen: boolean
  onClose: () => void
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [isSigning, setIsSigning] = useState(false)
  const [isSigned, setIsSigned] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const wallets = [
    {
      id: 'phantom',
      name: 'Phantom',
      description: 'Most popular Solana wallet',
      icon: '👻',
      color: 'from-purple-500 to-purple-600',
      features: ['Secure & Reliable', 'User-friendly', 'Multi-chain Support']
    },
    {
      id: 'okx',
      name: 'OKX Wallet',
      description: 'Professional cryptocurrency wallet',
      icon: '🔗',
      color: 'from-blue-500 to-blue-600',
      features: ['Easy Trading', 'Asset Management', 'DeFi Integration']
    },
    {
      id: 'solflare',
      name: 'Solflare',
      description: 'Native Solana ecosystem wallet',
      icon: '🔥',
      color: 'from-orange-500 to-orange-600',
      features: ['Native Support', 'High Performance', 'Developer Friendly']
    }
  ]

  const handleWalletSelect = (walletId: string) => {
    setSelectedWallet(walletId)
  }

  const handleConnect = async () => {
    if (!selectedWallet) return
    
    setIsConnecting(true)
    
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
      setWalletAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU')
    }, 2000)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setIsSigned(false)
    setSelectedWallet(null)
    setWalletAddress('')
  }

  const handleSign = async () => {
    setIsSigning(true)
    
    // Simulate signing process
    setTimeout(() => {
      setIsSigning(false)
      setIsSigned(true)
    }, 1500)
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
  }

  const getWalletInfo = () => {
    return wallets.find(w => w.id === selectedWallet)
  }

  const handleClose = () => {
    if (isConnecting || isSigning) return // Cannot close during connection or signing
    onClose()
          // Reset state
    setTimeout(() => {
      setIsConnected(false)
      setIsSigned(false)
      setSelectedWallet(null)
      setWalletAddress('')
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
                                {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-vine-700 flex items-center">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </h2>
                             <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={handleClose}
                 disabled={isConnecting || isSigning}
                 className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                   isConnecting || isSigning ? 'cursor-not-allowed opacity-50' : ''
                 }`}
               >
                 <X className="w-5 h-5" />
               </motion.button>
            </div>

                                {/* Content */}
            <div className="p-6">
              {!isConnected ? (
                <>
                                            {/* Wallet Selection */}
                  <div className="space-y-3 mb-6">
                    {wallets.map((wallet) => (
                      <motion.div
                        key={wallet.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWalletSelect(wallet.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedWallet === wallet.id
                            ? 'border-cat-orange bg-cat-orange/5'
                            : 'border-gray-200 hover:border-vine-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${wallet.color} rounded-full flex items-center justify-center text-white text-lg`}>
                            {wallet.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-vine-700">{wallet.name}</h4>
                            <p className="text-gray-600 text-sm">{wallet.description}</p>
                          </div>
                          {selectedWallet === wallet.id && (
                            <CheckCircle className="w-5 h-5 text-cat-orange" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                                            {/* Connect Button */}
                  {selectedWallet && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleConnect}
                      disabled={isConnecting}
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
                        isConnecting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-cat-orange to-vine-500 hover:from-cat-orange/90 hover:to-vine-500/90'
                      }`}
                    >
                      {isConnecting ? (
                        <div className="flex items-center justify-center">
                                                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                       Connecting...
                        </div>
                                             ) : (
                         `Connect ${getWalletInfo()?.name}`
                       )}
                    </motion.button>
                  )}

                                            {/* Security Tip */}
                  <div className="mt-6 p-4 bg-vine-50 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-vine-600 mt-0.5" />
                                             <div className="text-sm text-gray-600">
                         <p className="font-medium text-vine-700 mb-1">Secure Connection</p>
                         <p>We do not store your private key information, the connection process is completely secure.</p>
                       </div>
                    </div>
                  </div>
                </>
                             ) : (
                                         /* Connected State */
                 <div className="text-center">
                   {!isSigned ? (
                     <>
                       <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                         <CheckCircle className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="text-lg font-bold text-blue-700 mb-2">Connection Successful!</h3>
                       <p className="text-gray-600 text-sm mb-4">Your wallet has been successfully connected to VerdisDoge</p>

                       {/* Wallet Address */}
                       <div className="bg-gray-50 rounded-xl p-3 mb-4">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-medium text-gray-600">Wallet Address</span>
                           <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={copyAddress}
                             className="text-cat-orange hover:text-cat-orange/80"
                           >
                             <Copy className="w-3 h-3" />
                           </motion.button>
                         </div>
                         <div className="font-mono text-xs text-gray-800 break-all">
                           {walletAddress}
                         </div>
                       </div>

                       {/* Signature Prompt */}
                       <div className="bg-vine-50 rounded-xl p-4 mb-6">
                         <div className="flex items-start space-x-3">
                           <FileText className="w-5 h-5 text-vine-600 mt-0.5" />
                           <div className="text-sm text-gray-600">
                             <p className="font-medium text-vine-700 mb-1">Signature Verification Required</p>
                             <p>For security, please sign the following message:</p>
                             <div className="bg-white rounded-lg p-2 mt-2 font-mono text-xs text-gray-700">
                               "VerdisDoge - Connection Verification - {new Date().toISOString().split('T')[0]}"
                             </div>
                           </div>
                         </div>
                       </div>

                       {/* Sign Button */}
                       <motion.button
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={handleSign}
                         disabled={isSigning}
                         className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all ${
                           isSigning
                             ? 'bg-gray-400 cursor-not-allowed'
                             : 'bg-gradient-to-r from-cat-orange to-vine-500 hover:from-cat-orange/90 hover:to-vine-500/90'
                         }`}
                       >
                         {isSigning ? (
                           <div className="flex items-center justify-center">
                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                             Signing...
                           </div>
                         ) : (
                           'Confirm Signature'
                         )}
                       </motion.button>
                     </>
                   ) : (
                     <>
                       {/* Signature Success State */}
                       <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                         <CheckCircle className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="text-lg font-bold text-green-700 mb-2">Verification Complete!</h3>
                       <p className="text-gray-600 text-sm mb-4">Your wallet has been successfully verified and connected to VerdisDoge</p>

                       {/* Wallet Address */}
                       <div className="bg-gray-50 rounded-xl p-3 mb-4">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-medium text-gray-600">Wallet Address</span>
                           <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={copyAddress}
                             className="text-cat-orange hover:text-cat-orange/80"
                           >
                             <Copy className="w-3 h-3" />
                           </motion.button>
                         </div>
                         <div className="font-mono text-xs text-gray-800 break-all">
                           {walletAddress}
                         </div>
                       </div>

                       {/* Action Buttons */}
                       <div className="grid grid-cols-2 gap-3">
                                              <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       className="flex items-center justify-center space-x-2 py-2 px-3 bg-vine-100 text-vine-700 rounded-lg hover:bg-vine-200 transition-colors text-sm"
                     >
                       <ExternalLink className="w-3 h-3" />
                       <span>View Balance</span>
                     </motion.button>
                     
                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       onClick={handleDisconnect}
                       className="flex items-center justify-center space-x-2 py-2 px-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
                     >
                       <Zap className="w-3 h-3" />
                       <span>Disconnect</span>
                     </motion.button>
                       </div>
                     </>
                   )}
                 </div>
               )}
            </div>

                                {/* Footer Download Links */}
            {!isConnected && (
              <div className="p-6 bg-gray-50 rounded-b-2xl">
                <p className="text-sm text-gray-600 mb-3">Don't have a wallet?</p>
                <div className="grid grid-cols-3 gap-2">
                  {wallets.map((wallet) => (
                    <motion.a
                      key={wallet.id}
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-center p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${wallet.color} rounded-full flex items-center justify-center text-white text-sm mx-auto mb-1`}>
                        {wallet.icon}
                      </div>
                      <span className="text-xs text-gray-700">{wallet.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WalletModal 