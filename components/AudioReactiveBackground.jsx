import React, { useEffect, useRef, useState } from 'react';

const AudioReactiveBackground = ({ 
  sensitivity = 1,
  colors = ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4'],
  enabled = true 
}) => {
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const animationRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [audioPermission, setAudioPermission] = useState(false);

  const initAudio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        } 
      });
      
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      
      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);
      
      source.connect(analyserRef.current);
      setAudioPermission(true);
      setIsActive(true);
      
    } catch (error) {
      console.log('Audio access denied or not available');
      // Fallback to visual-only mode
      setIsActive(true);
    }
  };

  const drawVisualization = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);

    if (analyserRef.current && dataArrayRef.current) {
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      
      const barWidth = width / dataArrayRef.current.length;
      let x = 0;

      // Draw frequency bars
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const barHeight = (dataArrayRef.current[i] / 255) * height * sensitivity;
        
        const colorIndex = Math.floor((i / dataArrayRef.current.length) * colors.length);
        const color = colors[colorIndex];
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, color + 'FF');
        gradient.addColorStop(1, color + '33');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
        
        // Add glow effect
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
        ctx.shadowBlur = 0;
        
        x += barWidth;
      }

      // Draw waveform
      ctx.strokeStyle = colors[0] + 'AA';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let i = 0; i < dataArrayRef.current.length; i++) {
        const y = (dataArrayRef.current[i] / 255) * height;
        const x = (i / dataArrayRef.current.length) * width;
        
        if (i === 0) {
          ctx.moveTo(x, height - y);
        } else {
          ctx.lineTo(x, height - y);
        }
      }
      ctx.stroke();

    } else {
      // Fallback animation when no audio
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < 64; i++) {
        const barHeight = Math.sin(time + i * 0.1) * 50 + 100;
        const x = (i / 64) * width;
        
        const colorIndex = Math.floor((i / 64) * colors.length);
        const color = colors[colorIndex];
        
        const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, color + 'AA');
        gradient.addColorStop(1, color + '22');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, width / 64 - 1, barHeight);
      }
    }

    animationRef.current = requestAnimationFrame(drawVisualization);
  };

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = 200;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200;
    };

    window.addEventListener('resize', handleResize);

    if (isActive) {
      drawVisualization();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [enabled, isActive, sensitivity, colors]);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full opacity-30 mix-blend-screen"
        style={{ height: '200px' }}
      />
      
      {!isActive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={initAudio}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform pointer-events-auto"
          >
            🎵 Activar Audio Reactivo
          </button>
        </div>
      )}
    </div>
  );
};

// Simplified version for performance
const SimpleAudioReactive = ({ className = "" }) => {
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    let animationId;
    
    const animate = () => {
      // Simulate audio reactivity with sine wave
      const time = Date.now() * 0.001;
      const level = (Math.sin(time * 2) + Math.sin(time * 3.7) + Math.sin(time * 5.2)) / 3;
      setAudioLevel(Math.abs(level));
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className={`${className} relative overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-all duration-100"
        style={{
          transform: `scale(${1 + audioLevel * 0.1})`,
          opacity: 0.3 + audioLevel * 0.3
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 transition-all duration-150"
        style={{
          transform: `rotate(${audioLevel * 5}deg) scale(${1 + audioLevel * 0.05})`,
          opacity: 0.2 + audioLevel * 0.4
        }}
      />
    </div>
  );
};

export default AudioReactiveBackground;
export { SimpleAudioReactive };
