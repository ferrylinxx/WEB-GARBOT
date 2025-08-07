import React, { useState, useEffect, useRef } from 'react';

const AdvancedTypewriter = ({ 
  texts = [], 
  speed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  showCursor = true,
  cursorChar = "|",
  onComplete = null
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (texts.length === 0) return;

    const typeText = () => {
      const fullText = texts[currentTextIndex];
      
      if (isWaiting) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseTime);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          timeoutRef.current = setTimeout(typeText, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          timeoutRef.current = setTimeout(typeText, speed);
        }
      } else {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
          timeoutRef.current = setTimeout(typeText, speed);
        } else {
          setIsWaiting(true);
          if (onComplete) onComplete(currentTextIndex);
          timeoutRef.current = setTimeout(typeText, speed);
        }
      }
    };

    timeoutRef.current = setTimeout(typeText, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, speed, deleteSpeed, pauseTime, onComplete]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && (
        <span className="animate-pulse text-indigo-500 font-bold">
          {cursorChar}
        </span>
      )}
    </span>
  );
};

// Advanced version with multiple effects
const MultiEffectTypewriter = ({ 
  texts = [], 
  effects = ['typewriter', 'glitch', 'wave'],
  className = ""
}) => {
  const [currentEffect, setCurrentEffect] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const renderWithEffect = (text, effect) => {
    switch (effect) {
      case 'glitch':
        return (
          <span className="relative">
            {text.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block animate-cyber-glitch"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      
      case 'wave':
        return (
          <span className="relative">
            {text.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              >
                {char}
              </span>
            ))}
          </span>
        );
      
      case 'neon':
        return (
          <span className="animate-neon-flicker text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {text}
          </span>
        );
      
      case 'hologram':
        return (
          <span className="animate-hologram">
            {text}
          </span>
        );
      
      default:
        return text;
    }
  };

  return (
    <div className={className}>
      <AdvancedTypewriter
        texts={texts}
        speed={80}
        deleteSpeed={40}
        pauseTime={3000}
        onComplete={(index) => {
          setCurrentEffect((prev) => (prev + 1) % effects.length);
        }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold"
        showCursor={true}
        cursorChar="▋"
      />
    </div>
  );
};

// Code rain effect
const CodeRainTypewriter = ({ 
  texts = [], 
  className = "" 
}) => {
  const [matrixChars, setMatrixChars] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="absolute inset-0 opacity-20"
      />
      <div className="relative z-10">
        <AdvancedTypewriter
          texts={texts}
          speed={120}
          deleteSpeed={60}
          pauseTime={2500}
          className="font-mono text-green-400"
        />
      </div>
    </div>
  );
};

export default AdvancedTypewriter;
export { AdvancedTypewriter, MultiEffectTypewriter, CodeRainTypewriter };
