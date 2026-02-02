export default function Robot({ emotion = 'neutral', size = 64, className = '' }) {
  const emotionClass = `robot-${emotion}`;

  const emotions = {
    neutral: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes */}
        <line className="robot-eye-left" x1="22" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="14" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="14" cy="56" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="50" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="50" cy="56" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    happy: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - happy arcs */}
        <path className="robot-eye-left" d="M22 29 Q25 25 28 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path className="robot-eye-right" d="M36 29 Q39 25 42 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - raised */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="12" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="44" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="52" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="52" cy="44" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    sad: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - sad angled */}
        <line className="robot-eye-left" x1="22" y1="25" x2="28" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="28" x2="42" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - hanging down */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    mad: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - angry V shape */}
        <line className="robot-eye-left" x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - fists up */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="10" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="10" cy="48" r="2.5"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="54" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="54" cy="48" r="2.5"/>
        </g>
        {/* Legs - spread stance */}
        <line className="robot-leg-left" x1="27" y1="68" x2="23" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="41" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    surprised: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna - standing up */}
        <circle className="robot-antenna-ball" cx="32" cy="2" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="5" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - wide circles */}
        <circle className="robot-eye-left" cx="25" cy="27" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle className="robot-eye-right" cx="39" cy="27" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - raised in surprise */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="8" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="8" cy="44" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="56" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="56" cy="44" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    confused: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna - tilted */}
        <circle className="robot-antenna-ball" cx="36" cy="4" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="35" y1="7" x2="33" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - asymmetrical */}
        <line className="robot-eye-left" x1="22" y1="25" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Question mark */}
        <text className="robot-question" x="50" y="20" fontSize="12" fontWeight="bold" fill="currentColor">?</text>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - one up scratching */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="14" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="14" cy="56" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="50" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="50" y1="44" x2="48" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="36" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    thinking: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - looking up */}
        <line className="robot-eye-left" x1="24" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="38" y1="25" x2="42" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Thought bubbles */}
        <g className="robot-thought">
          <circle cx="52" cy="12" r="1.5"/>
          <circle cx="56" cy="6" r="2"/>
          <circle cx="60" cy="0" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </g>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - thinking pose */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="14" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="14" cy="56" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="48" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="48" y1="44" x2="44" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="44" cy="38" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    love: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - hearts */}
        <path className="robot-eye-left" d="M23 27 L25 25 L27 27 L25 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path className="robot-eye-right" d="M37 27 L39 25 L41 27 L39 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - hands together */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="26" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="38" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <circle className="robot-hands" cx="32" cy="58" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    excited: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna - bouncing up */}
        <circle className="robot-antenna-ball" cx="32" cy="1" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="4" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - wide */}
        <circle className="robot-eye-left" cx="25" cy="26" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle className="robot-eye-right" cx="39" cy="26" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        {/* Exclamation marks */}
        <g className="robot-exclaim-left">
          <line x1="8" y1="20" x2="8" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="8" cy="32" r="1"/>
        </g>
        <g className="robot-exclaim-right">
          <line x1="56" y1="20" x2="56" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="56" cy="32" r="1"/>
        </g>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - raised high */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="10" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="10" cy="40" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="54" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="54" cy="40" r="2"/>
        </g>
        {/* Legs - jumping */}
        <line className="robot-leg-left" x1="27" y1="68" x2="24" y2="74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="40" y2="74" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    shrug: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna - tilted */}
        <circle className="robot-antenna-ball" cx="34" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="33" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - flat */}
        <line className="robot-eye-left" x1="22" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - shrug position */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="10" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="10" y1="46" x2="8" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="8" cy="40" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="54" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="54" y1="46" x2="56" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="56" cy="40" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    waving: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - friendly */}
        <line className="robot-eye-left" x1="22" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="14" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="14" cy="56" r="2"/>
        </g>
        <g className="robot-arm-right robot-waving-arm">
          <line x1="44" y1="52" x2="52" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="52" y1="42" x2="56" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="56" cy="34" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    dancing: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna - bouncing */}
        <circle className="robot-antenna-ball" cx="34" cy="2" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="33" y1="5" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - happy */}
        <path className="robot-eye-left" d="M22 29 Q25 25 28 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path className="robot-eye-right" d="M36 29 Q39 25 42 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - disco pose */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="10" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="10" cy="56" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="54" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="54" cy="40" r="2"/>
        </g>
        {/* Legs - dancing */}
        <g className="robot-leg-left">
          <line x1="27" y1="68" x2="22" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <g className="robot-leg-right">
          <line x1="37" y1="68" x2="42" y2="72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="42" y1="72" x2="38" y2="78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    sleeping: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" fill="currentColor" width={size * 1.25} height={size * 0.625} className={`robot ${emotionClass} ${className}`}>
        {/* Laying down */}
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="5" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="8" y1="20" x2="14" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="14" y="7" width="26" height="32" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - closed */}
        <line className="robot-eye-left" x1="22" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="22" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* ZZZ */}
        <g className="robot-zzz">
          <text x="42" y="8" fontSize="8" fontWeight="bold" fill="currentColor">Z</text>
          <text x="48" y="5" fontSize="6" fontWeight="bold" fill="currentColor">z</text>
          <text x="52" y="3" fontSize="4" fontWeight="bold" fill="currentColor">z</text>
        </g>
        {/* Body */}
        <rect className="robot-body" x="46" y="14" width="18" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="52" cy="20" r="1.5"/>
        <circle className="robot-button-bottom" cx="58" cy="20" r="1.5"/>
        {/* Arm */}
        <g className="robot-arm-left">
          <line x1="52" y1="30" x2="52" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="52" cy="36" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="68" y1="17" x2="76" y2="17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="68" y1="23" x2="76" y2="23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    talking: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - friendly */}
        <line className="robot-eye-left" x1="22" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Speech bubbles */}
        <g className="robot-speech">
          <circle cx="54" cy="18" r="2" fill="currentColor"/>
          <circle cx="58" cy="12" r="2.5" fill="currentColor"/>
          <circle cx="60" cy="5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </g>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - gesturing */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="14" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="14" cy="48" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="52" y2="46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="52" cy="46" r="2"/>
        </g>
        {/* Legs */}
        <line className="robot-leg-left" x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-leg-right" x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    'walking-front': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head */}
        <rect className="robot-head" x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - looking forward */}
        <line className="robot-eye-left" x1="22" y1="27" x2="28" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line className="robot-eye-right" x1="36" y1="27" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body */}
        <rect className="robot-body" x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arms - swinging */}
        <g className="robot-arm-left">
          <line x1="20" y1="52" x2="12" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="58" r="2"/>
        </g>
        <g className="robot-arm-right">
          <line x1="44" y1="52" x2="52" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="52" cy="48" r="2"/>
        </g>
        {/* Legs - walking stride */}
        <g className="robot-leg-left">
          <line x1="27" y1="68" x2="22" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <g className="robot-leg-right">
          <line x1="37" y1="68" x2="42" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    'walking-side': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25} className={`robot ${emotionClass} ${className}`}>
        {/* Side view - facing right */}
        {/* Antenna */}
        <circle className="robot-antenna-ball" cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line className="robot-antenna-stem" x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        {/* Head - side profile */}
        <rect className="robot-head" x="20" y="14" width="24" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eye - single side view */}
        <line className="robot-eye-left" x1="34" y1="27" x2="40" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Body - narrower from side */}
        <rect className="robot-body" x="28" y="46" width="8" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle className="robot-button-top" cx="32" cy="52" r="1.5"/>
        <circle className="robot-button-bottom" cx="32" cy="58" r="1.5"/>
        {/* Arm - one visible */}
        <g className="robot-arm-right">
          <line x1="36" y1="52" x2="44" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="44" cy="48" r="2"/>
        </g>
        {/* Legs - walking stride from side */}
        <g className="robot-leg-left">
          <line x1="30" y1="68" x2="22" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
        <g className="robot-leg-right">
          <line x1="34" y1="68" x2="42" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  };

  return emotions[emotion] || emotions.neutral;
}
