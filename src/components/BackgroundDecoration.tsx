import React from 'react'

const BackgroundDecoration: React.FC = () => {
  return (
    <div className="bg-decoration">
      {/* 浮动的VineCat Logo */}
      <img 
        src="/images/vinecat.png" 
        alt="VineCat" 
        className="floating-logo"
      />
      <img 
        src="/images/vinecat.png" 
        alt="VineCat" 
        className="floating-logo"
      />
      <img 
        src="/images/vinecat.png" 
        alt="VineCat" 
        className="floating-logo"
      />
      <img 
        src="/images/vinecat.png" 
        alt="VineCat" 
        className="floating-logo"
      />
      
      {/* 几何装饰形状 */}
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      
      {/* 粒子效果 */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  )
}

export default BackgroundDecoration 