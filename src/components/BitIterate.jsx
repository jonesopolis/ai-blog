import SEO from './SEO';
import Footer from './Footer';

// Sad robot variations for iteration
const sadVariations = [
  {
    id: 'current',
    name: 'Current (baseline)',
    description: 'Angled eyes slanting down outward, no tears',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - sad angled (current) */}
        <line x1="22" y1="25" x2="28" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="28" x2="42" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v1',
    name: 'V1: Mad-style eyes + single tear',
    description: 'Eyes angled like mad (inner low, outer high), single tear drop each',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style (inner low, outer high) */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - single drop */}
        <ellipse cx="25" cy="33" rx="1.5" ry="2" fill="currentColor"/>
        <ellipse cx="39" cy="33" rx="1.5" ry="2" fill="currentColor"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v2',
    name: 'V2: Mad-style eyes + tear stream',
    description: 'Mad-style angled eyes with streaming tear lines',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - streaming lines */}
        <line x1="25" y1="30" x2="25" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="39" y1="30" x2="39" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v3',
    name: 'V3: Mad-style + double tears',
    description: 'Mad-style eyes with two tear drops cascading',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - double drops */}
        <ellipse cx="25" cy="32" rx="1.2" ry="1.8" fill="currentColor"/>
        <ellipse cx="25" cy="37" rx="1" ry="1.5" fill="currentColor"/>
        <ellipse cx="39" cy="32" rx="1.2" ry="1.8" fill="currentColor"/>
        <ellipse cx="39" cy="37" rx="1" ry="1.5" fill="currentColor"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v4',
    name: 'V4: Downward arc eyes + tears',
    description: 'Curved sad eyes (like inverted happy) with single tears',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - downward curve (inverted happy) */}
        <path d="M22 25 Q25 29 28 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M36 25 Q39 29 42 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        {/* Tears */}
        <ellipse cx="25" cy="33" rx="1.5" ry="2" fill="currentColor"/>
        <ellipse cx="39" cy="33" rx="1.5" ry="2" fill="currentColor"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v5',
    name: 'V5: Mad-style + tear puddle',
    description: 'Mad-style eyes, tears reaching down to chin area',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - long streams with drops */}
        <line x1="25" y1="30" x2="24" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <ellipse cx="24" cy="42" rx="1.5" ry="2" fill="currentColor"/>
        <line x1="39" y1="30" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <ellipse cx="40" cy="42" rx="1.5" ry="2" fill="currentColor"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v6',
    name: 'V6: Subtle mad-style + wavy tears',
    description: 'Slightly angled eyes with wavy tear paths',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - subtle mad style (less steep angle) */}
        <line x1="22" y1="27" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - wavy */}
        <path d="M25 30 Q24 33 25 36 Q26 39 25 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M39 30 Q40 33 39 36 Q38 39 39 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v7',
    name: 'V7: Mad-style + hollow tear drops',
    description: 'Mad eyes with outline-only tear drops',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - hollow drops */}
        <ellipse cx="25" cy="34" rx="2" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="39" cy="34" rx="2" ry="2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'v8',
    name: 'V8: Mad-style + classic teardrop shape',
    description: 'Mad eyes with traditional teardrop silhouette',
    svg: (size) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={size} height={size * 1.25}>
        <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
        <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
        {/* Eyes - mad style */}
        <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Tears - classic teardrop shape */}
        <path d="M25 30 L23.5 35 Q25 37 26.5 35 Z" fill="currentColor"/>
        <path d="M39 30 L37.5 35 Q39 37 40.5 35 Z" fill="currentColor"/>
        <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="52" r="1.5"/>
        <circle cx="32" cy="58" r="1.5"/>
        <g>
          <line x1="20" y1="52" x2="16" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="62" r="2"/>
        </g>
        <g>
          <line x1="44" y1="52" x2="48" y2="62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="48" cy="62" r="2"/>
        </g>
        <line x1="27" y1="68" x2="27" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="37" y1="68" x2="37" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function BitIterate() {
  return (
    <>
      <SEO
        title="Sad Bit Iteration | Please Recompile"
        description="Iterating on the sad robot design"
      />
      <main className="bit-page">
        <div className="container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '8px' }}>Sad Bit Iteration</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Iterating on the sad robot. Goal: Eyes shaped more like the mad version (inner low, outer high)
              plus tears.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '48px'
          }}>
            {sadVariations.map((variant) => (
              <div key={variant.id} style={{
                padding: '24px',
                background: 'var(--bg-secondary)',
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  {variant.svg(96)}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '14px' }}>{variant.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{variant.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <h2 style={{ marginBottom: '24px' }}>Side by Side: Mad vs Sad Variations</h2>
            <div style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              padding: '32px',
              background: 'var(--bg-secondary)',
              borderRadius: '12px',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 64 82" fill="currentColor" width={96} height={120}>
                  <circle cx="32" cy="3" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="32" y1="6" x2="32" y2="14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="16" y="14" width="32" height="26" rx="8" ry="8" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <line x1="22" y1="28" x2="28" y2="25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="36" y1="25" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <rect x="26" y="46" width="12" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <circle cx="32" cy="52" r="1.5"/>
                  <circle cx="32" cy="58" r="1.5"/>
                  <g>
                    <line x1="20" y1="52" x2="10" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="10" cy="48" r="2.5"/>
                  </g>
                  <g>
                    <line x1="44" y1="52" x2="54" y2="48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="54" cy="48" r="2.5"/>
                  </g>
                  <line x1="27" y1="68" x2="23" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="37" y1="68" x2="41" y2="76" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
                <p style={{ marginTop: '8px', fontWeight: '600' }}>Mad (reference)</p>
              </div>
              {sadVariations.slice(1, 4).map((variant) => (
                <div key={variant.id} style={{ textAlign: 'center' }}>
                  {variant.svg(96)}
                  <p style={{ marginTop: '8px', fontWeight: '600' }}>{variant.id.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
