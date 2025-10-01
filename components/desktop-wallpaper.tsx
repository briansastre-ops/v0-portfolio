"use client"

export function DesktopWallpaper() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      <div className="relative z-0 opacity-15 flex items-center justify-center">
        {/* Pixelated ASCII-style text */}
        <div className="text-center">
          <pre 
            className="font-mono text-xs sm:text-sm md:text-base lg:text-lg leading-tight inline-block"
            style={{
              background: 'linear-gradient(135deg, #00ff00 0%, #00cc00 25%, #00ff00 50%, #ffff00 75%, #00ff00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'bold',
              letterSpacing: '0.02em',
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 0, 0.3))',
              textAlign: 'center'
            }}
          >
{`
██████╗ ██████╗ ██╗ █████╗ ███╗   ██╗
██╔══██╗██╔══██╗██║██╔══██╗████╗  ██║
██████╔╝██████╔╝██║███████║██╔██╗ ██║
██╔══██╗██╔══██╗██║██╔══██║██║╚██╗██║
██████╔╝██║  ██║██║██║  ██║██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝

███████╗ █████╗ ███████╗████████╗██████╗ ███████╗
██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔════╝
███████╗███████║███████╗   ██║   ██████╔╝█████╗  
╚════██║██╔══██║╚════██║   ██║   ██╔══██╗██╔══╝  
███████║██║  ██║███████║   ██║   ██║  ██║███████╗
╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
`}
          </pre>
          
          {/* Subtitle */}
          <div 
            className="text-center mt-2 font-mono text-xs md:text-sm tracking-widest text-accent"
          >
            &gt; FULL_STACK_DEVELOPER.EXE
          </div>
          
          {/* Decorative terminal prompt */}
          <div className="text-center mt-2 font-mono text-xs opacity-60 text-primary">
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </div>
  );
}