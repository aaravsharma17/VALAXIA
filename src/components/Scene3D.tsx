import React, { useRef, useEffect } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const Scene3D = ({ mousePosition }: { mousePosition: MousePosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const assetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      if (assetRef.current) {
        const rotationX = (mousePosition.y - 0.5) * 20;
        const rotationY = (mousePosition.x - 0.5) * 20;
        
        assetRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${rotationX}deg) 
          rotateY(${rotationY}deg)
          translateZ(50px)
        `;
      }
    };

    handleMouseMove();
  }, [mousePosition]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {/* 3D Asset Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={assetRef}
          className="relative w-96 h-96 transition-transform duration-300 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Central rotating rings */}
          <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin-slow">
            <div className="absolute inset-4 border border-white/20 rounded-full animate-reverse-spin">
              <div className="absolute inset-8 border border-purple-400/40 rounded-full animate-spin-slow">
                <div className="absolute inset-12 bg-gradient-to-r from-purple-400/20 to-white/10 rounded-full backdrop-blur-sm">
                  <div className="absolute inset-4 bg-black/60 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-white rounded-full animate-float"
              style={{
                left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
                top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateZ(${Math.sin((i / 8) * Math.PI * 2) * 50}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Scene3D;