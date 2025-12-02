'use client'

export default function PremiumBackground() {
  // Componente simplificado - solo gradientes estáticos para máximo rendimiento
  return (
    <>
      {/* Gradientes estáticos - Sin animaciones pesadas */}
      <div className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-0 opacity-10">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="fixed bottom-0 right-0 w-96 h-96 pointer-events-none z-0 opacity-10">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>
    </>
  )
}

