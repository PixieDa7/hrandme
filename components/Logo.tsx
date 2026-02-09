interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  const accentColor = variant === 'white' ? '#FFFFFF' : '#5244E5' // Purple for navbar, white for footer
  const gradientId = `logo-gradient-${variant}`
  
  return (
    <svg 
      viewBox="0 0 180 45" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definition */}
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {variant === 'white' ? (
            <>
              <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
            </>
          ) : (
            <>
              <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#9333EA', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
            </>
          )}
        </linearGradient>
      </defs>
      
      {/* Simple icon - Three people in a clean arrangement */}
      <g transform="translate(0, 4)">
        {/* Center person - larger */}
        <g transform="translate(22, 10)">
          <circle cx="0" cy="0" r="4" fill={accentColor} />
          <rect x="-5" y="6" width="10" height="12" rx="2" fill={accentColor} />
        </g>
        
        {/* Left person */}
        <g transform="translate(10, 14)">
          <circle cx="0" cy="0" r="3" fill={accentColor} opacity="0.7" />
          <rect x="-4" y="5" width="8" height="10" rx="1.5" fill={accentColor} opacity="0.7" />
        </g>
        
        {/* Right person */}
        <g transform="translate(34, 14)">
          <circle cx="0" cy="0" r="3" fill={accentColor} opacity="0.7" />
          <rect x="-4" y="5" width="8" height="10" rx="1.5" fill={accentColor} opacity="0.7" />
        </g>
      </g>
      
      {/* Text - HRandMe with gradient */}
      <text
        x="50"
        y="30"
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '24px',
          fontWeight: '700',
          letterSpacing: '0.01em'
        }}
        fill={`url(#${gradientId})`}
      >
        HRandMe
      </text>
    </svg>
  )
}
