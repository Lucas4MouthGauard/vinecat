import React from 'react'
import vinecatLogo from '../assets/vinecat.png'

const BackgroundDecoration: React.FC = () => {
  return (
    <div className="bg-decoration">
              {/* Floating VerdisDoge Logo */}
                    <img
                src={vinecatLogo}
                alt="VerdisDoge"
                className="floating-logo"
              />
              <img
                src={vinecatLogo}
                alt="VerdisDoge"
                className="floating-logo"
              />
              <img
                src={vinecatLogo}
                alt="VerdisDoge"
                className="floating-logo"
              />
              <img
                src={vinecatLogo}
                alt="VerdisDoge"
                className="floating-logo"
              />
      
              {/* Geometric Decorative Shapes */}
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      <div className="geometric-shape"></div>
      
              {/* Particle Effects */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  )
}

export default BackgroundDecoration 