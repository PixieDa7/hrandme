interface LogoProps {
  className?: string
  variant?: 'default' | 'white'
}

export default function Logo({ className = '', variant = 'default' }: LogoProps) {
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#0F172A'
  const accentColor = '#2563EB' // Professional blue
  
  return (
    <svg 
      viewBox="0 0 180 45" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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
      
      {/* Text - HRandMe with proper spacing */}
      <text
        x="50"
        y="30"
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '24px',
          fontWeight: '700',
          letterSpacing: '0.01em'
        }}
        fill={primaryColor}
      >
        HRandMe
      </text>
    </svg>
  )
}
