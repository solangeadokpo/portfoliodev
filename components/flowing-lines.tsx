export function FlowingLines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main flowing curve - top area */}
      <svg className="absolute top-0 left-0 w-full h-96 flowing-line enhanced-glow" viewBox="0 0 1400 400" fill="none">
        <g opacity="0.6">
          {/* Main curve */}
          <path
            d="M-200 200 Q200 120 500 160 Q800 200 1100 140 Q1300 120 1600 160"
            stroke="url(#meshGradient1)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Only 3 parallel lines */}
          <path
            d="M-200 190 Q200 110 500 150 Q800 190 1100 130 Q1300 110 1600 150"
            stroke="url(#meshGradient1)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M-200 210 Q200 130 500 170 Q800 210 1100 150 Q1300 130 1600 170"
            stroke="url(#meshGradient1)"
            strokeWidth="0.8"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M-200 180 Q200 100 500 140 Q800 180 1100 120 Q1300 100 1600 140"
            stroke="url(#meshGradient1)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />
        </g>

        <defs>
          <linearGradient id="meshGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="oklch(0.65 0.15 60 / 0.3)" />
            <stop offset="50%" stopColor="oklch(0.65 0.15 60 / 0.6)" />
            <stop offset="80%" stopColor="oklch(0.65 0.15 60 / 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Secondary flowing curve - right side */}
      <svg
        className="absolute top-1/3 right-0 w-full h-80 flowing-line-reverse glow-effect"
        viewBox="0 0 1400 320"
        fill="none"
        style={{ animationDelay: "2s" }}
      >
        <g opacity="0.5">
          <path
            d="M1600 160 Q1200 100 900 140 Q600 180 300 140 Q100 120 -200 140"
            stroke="url(#meshGradient2)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M1600 150 Q1200 90 900 130 Q600 170 300 130 Q100 110 -200 130"
            stroke="url(#meshGradient2)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M1600 170 Q1200 110 900 150 Q600 190 300 150 Q100 130 -200 150"
            stroke="url(#meshGradient2)"
            strokeWidth="0.6"
            fill="none"
            opacity="0.6"
          />
        </g>

        <defs>
          <linearGradient id="meshGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="oklch(0.65 0.15 60 / 0.4)" />
            <stop offset="70%" stopColor="oklch(0.65 0.15 60 / 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom accent curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-72 flowing-line-subtle enhanced-glow"
        viewBox="0 0 1400 300"
        fill="none"
        style={{ animationDelay: "4s" }}
      >
        <g opacity="0.4">
          <path
            d="M-200 150 Q300 220 600 180 Q900 140 1200 180 Q1400 200 1600 150"
            stroke="url(#meshGradient3)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M-200 140 Q300 210 600 170 Q900 130 1200 170 Q1400 190 1600 140"
            stroke="url(#meshGradient3)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.7"
          />
        </g>

        <defs>
          <linearGradient id="meshGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="oklch(0.65 0.15 60 / 0.2)" />
            <stop offset="50%" stopColor="oklch(0.65 0.15 60 / 0.5)" />
            <stop offset="75%" stopColor="oklch(0.65 0.15 60 / 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
