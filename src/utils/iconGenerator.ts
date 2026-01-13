// Icon generator utility for creating inline SVG data URIs
// Colors match the SIX3 Agency design system:
// - Background: #000000 (black)
// - Foreground: #FFFFFF (white)
// - Accent: #16a34a (green)
// - Secondary: #1a1a1a (dark gray)

const encodeDataUri = (svg: string): string => {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const icons = {
  // Legal / Scales of Justice
  legal: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Balance beam -->
        <line x1="-150" y1="0" x2="150" y2="0" stroke="#16a34a" stroke-width="4"/>
        <!-- Center pole -->
        <line x1="0" y1="0" x2="0" y2="-120" stroke="#16a34a" stroke-width="4"/>
        <!-- Left scale -->
        <line x1="-150" y1="0" x2="-180" y2="40" stroke="#16a34a" stroke-width="3"/>
        <line x1="-150" y1="0" x2="-120" y2="40" stroke="#16a34a" stroke-width="3"/>
        <line x1="-180" y1="40" x2="-120" y2="40" stroke="#16a34a" stroke-width="3"/>
        <!-- Right scale -->
        <line x1="150" y1="0" x2="120" y2="40" stroke="#16a34a" stroke-width="3"/>
        <line x1="150" y1="0" x2="180" y2="40" stroke="#16a34a" stroke-width="3"/>
        <line x1="120" y1="40" x2="180" y2="40" stroke="#16a34a" stroke-width="3"/>
        <!-- Decorative circles -->
        <circle cx="0" cy="-120" r="8" fill="#16a34a"/>
        <circle cx="-150" cy="0" r="6" fill="#16a34a"/>
        <circle cx="150" cy="0" r="6" fill="#16a34a"/>
      </g>
    </svg>
  `),

  // Real Estate / House
  realEstate: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 320)">
        <!-- Roof -->
        <path d="M -140 -60 L 0 -160 L 140 -60 Z" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- House body -->
        <rect x="-120" y="-60" width="240" height="180" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Door -->
        <rect x="-30" y="40" width="60" height="80" fill="none" stroke="#16a34a" stroke-width="3"/>
        <!-- Windows -->
        <rect x="-90" y="-20" width="40" height="40" fill="none" stroke="#16a34a" stroke-width="2"/>
        <rect x="50" y="-20" width="40" height="40" fill="none" stroke="#16a34a" stroke-width="2"/>
        <!-- Window crosses -->
        <line x1="-70" y1="-20" x2="-70" y2="20" stroke="#16a34a" stroke-width="1"/>
        <line x1="-90" y1="0" x2="-50" y2="0" stroke="#16a34a" stroke-width="1"/>
        <line x1="70" y1="-20" x2="70" y2="20" stroke="#16a34a" stroke-width="1"/>
        <line x1="50" y1="0" x2="90" y2="0" stroke="#16a34a" stroke-width="1"/>
      </g>
    </svg>
  `),

  // E-commerce / Shopping
  ecommerce: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Shopping bag -->
        <path d="M -100 -40 L -120 120 L 120 120 L 100 -40 Z" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Handles -->
        <path d="M -70 -40 Q -70 -90 0 -90 Q 70 -90 70 -40" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Decorative elements -->
        <circle cx="0" cy="20" r="30" fill="none" stroke="#16a34a" stroke-width="3" opacity="0.5"/>
        <circle cx="0" cy="20" r="15" fill="none" stroke="#16a34a" stroke-width="2"/>
      </g>
    </svg>
  `),

  // Healthcare / Medical Cross
  healthcare: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Medical cross -->
        <rect x="-30" y="-120" width="60" height="240" fill="none" stroke="#16a34a" stroke-width="4"/>
        <rect x="-120" y="-30" width="240" height="60" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Heart shape overlay -->
        <path d="M 0 40 Q -60 -20 -80 -40 Q -90 -60 -70 -80 Q -40 -90 0 -60 Q 40 -90 70 -80 Q 90 -60 80 -40 Q 60 -20 0 40"
              fill="none" stroke="#16a34a" stroke-width="3" opacity="0.7"/>
      </g>
    </svg>
  `),

  // FinTech / Graph
  fintech: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Axis -->
        <line x1="-150" y1="100" x2="150" y2="100" stroke="#16a34a" stroke-width="3"/>
        <line x1="-150" y1="100" x2="-150" y2="-100" stroke="#16a34a" stroke-width="3"/>
        <!-- Growth line -->
        <path d="M -120 80 L -60 40 L 0 -20 L 60 -60 L 120 -90" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Data points -->
        <circle cx="-120" cy="80" r="6" fill="#16a34a"/>
        <circle cx="-60" cy="40" r="6" fill="#16a34a"/>
        <circle cx="0" cy="-20" r="6" fill="#16a34a"/>
        <circle cx="60" cy="-60" r="6" fill="#16a34a"/>
        <circle cx="120" cy="-90" r="6" fill="#16a34a"/>
        <!-- Bars in background -->
        <rect x="-130" y="60" width="20" height="40" fill="#16a34a" opacity="0.3"/>
        <rect x="-70" y="20" width="20" height="80" fill="#16a34a" opacity="0.3"/>
        <rect x="-10" y="-40" width="20" height="140" fill="#16a34a" opacity="0.3"/>
        <rect x="50" y="-80" width="20" height="180" fill="#16a34a" opacity="0.3"/>
        <rect x="110" y="-90" width="20" height="190" fill="#16a34a" opacity="0.3"/>
      </g>
    </svg>
  `),

  // Manufacturing / Gear
  manufacturing: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Large gear -->
        <circle cx="0" cy="0" r="100" fill="none" stroke="#16a34a" stroke-width="4"/>
        <circle cx="0" cy="0" r="40" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Gear teeth (8 teeth) -->
        <rect x="-15" y="-110" width="30" height="20" fill="#16a34a"/>
        <rect x="-15" y="90" width="30" height="20" fill="#16a34a"/>
        <rect x="-110" y="-15" width="20" height="30" fill="#16a34a"/>
        <rect x="90" y="-15" width="20" height="30" fill="#16a34a"/>
        <rect x="-78" y="-78" width="20" height="20" transform="rotate(45 -68 -68)" fill="#16a34a"/>
        <rect x="58" y="-78" width="20" height="20" transform="rotate(-45 68 -68)" fill="#16a34a"/>
        <rect x="-78" y="58" width="20" height="20" transform="rotate(-45 -68 68)" fill="#16a34a"/>
        <rect x="58" y="58" width="20" height="20" transform="rotate(45 68 68)" fill="#16a34a"/>
        <!-- Small gear overlay -->
        <circle cx="70" cy="-70" r="40" fill="none" stroke="#16a34a" stroke-width="3" opacity="0.6"/>
        <circle cx="70" cy="-70" r="15" fill="none" stroke="#16a34a" stroke-width="3" opacity="0.6"/>
      </g>
    </svg>
  `),

  // AI / Brain Neural Network
  ai: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Neural network nodes -->
        <circle cx="-100" cy="-80" r="8" fill="#16a34a"/>
        <circle cx="-100" cy="0" r="8" fill="#16a34a"/>
        <circle cx="-100" cy="80" r="8" fill="#16a34a"/>
        <circle cx="0" cy="-100" r="8" fill="#16a34a"/>
        <circle cx="0" cy="-40" r="8" fill="#16a34a"/>
        <circle cx="0" cy="40" r="8" fill="#16a34a"/>
        <circle cx="0" cy="100" r="8" fill="#16a34a"/>
        <circle cx="100" cy="-80" r="8" fill="#16a34a"/>
        <circle cx="100" cy="0" r="8" fill="#16a34a"/>
        <circle cx="100" cy="80" r="8" fill="#16a34a"/>
        <!-- Connections -->
        <line x1="-100" y1="-80" x2="0" y2="-100" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="-80" x2="0" y2="-40" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="0" x2="0" y2="-40" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="0" x2="0" y2="40" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="80" x2="0" y2="40" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="80" x2="0" y2="100" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="-100" x2="100" y2="-80" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="-40" x2="100" y2="-80" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="-40" x2="100" y2="0" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="40" x2="100" y2="0" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="40" x2="100" y2="80" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="0" y1="100" x2="100" y2="80" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
      </g>
    </svg>
  `),

  // Search Marketing / Magnifying Glass with Chart
  searchMarketing: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(350, 280)">
        <!-- Magnifying glass -->
        <circle cx="0" cy="0" r="80" fill="none" stroke="#16a34a" stroke-width="4"/>
        <line x1="56" y1="56" x2="120" y2="120" stroke="#16a34a" stroke-width="6"/>
        <!-- Chart inside -->
        <rect x="-40" y="-10" width="12" height="30" fill="#16a34a" opacity="0.7"/>
        <rect x="-20" y="-25" width="12" height="45" fill="#16a34a" opacity="0.7"/>
        <rect x="0" y="-35" width="12" height="55" fill="#16a34a" opacity="0.7"/>
        <rect x="20" y="-45" width="12" height="65" fill="#16a34a" opacity="0.7"/>
        <!-- Arrow up -->
        <path d="M 45 -55 L 55 -65 L 65 -55" fill="none" stroke="#16a34a" stroke-width="3"/>
      </g>
    </svg>
  `),

  // Content Creation / Document with pen
  contentCreation: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Document -->
        <rect x="-90" y="-120" width="180" height="240" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Text lines -->
        <line x1="-70" y1="-80" x2="70" y2="-80" stroke="#16a34a" stroke-width="2" opacity="0.6"/>
        <line x1="-70" y1="-50" x2="70" y2="-50" stroke="#16a34a" stroke-width="2" opacity="0.6"/>
        <line x1="-70" y1="-20" x2="70" y2="-20" stroke="#16a34a" stroke-width="2" opacity="0.6"/>
        <line x1="-70" y1="10" x2="40" y2="10" stroke="#16a34a" stroke-width="2" opacity="0.6"/>
        <!-- Pen -->
        <g transform="translate(60, 60) rotate(-45)">
          <rect x="-5" y="-50" width="10" height="50" fill="#16a34a"/>
          <path d="M -5 0 L 0 10 L 5 0 Z" fill="#16a34a"/>
          <circle cx="0" cy="-50" r="8" fill="none" stroke="#16a34a" stroke-width="2"/>
        </g>
        <!-- Sparkles -->
        <circle cx="80" cy="80" r="3" fill="#16a34a"/>
        <circle cx="95" cy="70" r="2" fill="#16a34a"/>
        <circle cx="75" cy="95" r="2" fill="#16a34a"/>
      </g>
    </svg>
  `),

  // Automation / Workflow
  automation: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Flow boxes -->
        <rect x="-140" y="-40" width="80" height="80" fill="none" stroke="#16a34a" stroke-width="4"/>
        <rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#16a34a" stroke-width="4"/>
        <rect x="60" y="-40" width="80" height="80" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Arrows -->
        <path d="M -55 0 L -45 0" stroke="#16a34a" stroke-width="3"/>
        <path d="M -50 -5 L -45 0 L -50 5" fill="#16a34a"/>
        <path d="M 45 0 L 55 0" stroke="#16a34a" stroke-width="3"/>
        <path d="M 50 -5 L 55 0 L 50 5" fill="#16a34a"/>
        <!-- Circular arrow (automation symbol) -->
        <path d="M 0 -80 A 60 60 0 1 1 0 -79" fill="none" stroke="#16a34a" stroke-width="3" opacity="0.5"/>
        <path d="M -5 -75 L 0 -80 L 5 -75" fill="#16a34a" opacity="0.5"/>
      </g>
    </svg>
  `),

  // Professional Services / Briefcase
  professionalServices: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Briefcase body -->
        <rect x="-120" y="-20" width="240" height="120" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Handle -->
        <path d="M -60 -20 L -60 -60 L 60 -60 L 60 -20" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Lock/clasp -->
        <rect x="-15" y="-20" width="30" height="20" fill="#16a34a"/>
        <circle cx="0" cy="30" r="12" fill="none" stroke="#16a34a" stroke-width="3"/>
        <!-- Decorative lines -->
        <line x1="-100" y1="40" x2="100" y2="40" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
        <line x1="-100" y1="70" x2="100" y2="70" stroke="#16a34a" stroke-width="2" opacity="0.4"/>
      </g>
    </svg>
  `),

  // Local Business / Storefront
  localBusiness: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 320)">
        <!-- Awning -->
        <path d="M -130 -80 Q -130 -100 -110 -100 L -70 -100 Q -70 -80 -50 -80 L -30 -80 Q -30 -100 -10 -100 L 10 -100 Q 10 -80 30 -80 L 50 -80 Q 50 -100 70 -100 L 110 -100 Q 130 -100 130 -80 L 130 -60 L -130 -60 Z"
              fill="none" stroke="#16a34a" stroke-width="3"/>
        <!-- Building -->
        <rect x="-120" y="-60" width="240" height="160" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Door -->
        <rect x="-30" y="20" width="60" height="80" fill="none" stroke="#16a34a" stroke-width="3"/>
        <circle cx="-10" cy="60" r="3" fill="#16a34a"/>
        <!-- Windows -->
        <rect x="-100" y="-30" width="35" height="35" fill="none" stroke="#16a34a" stroke-width="2"/>
        <rect x="65" y="-30" width="35" height="35" fill="none" stroke="#16a34a" stroke-width="2"/>
        <rect x="-100" y="20" width="35" height="35" fill="none" stroke="#16a34a" stroke-width="2"/>
        <rect x="65" y="20" width="35" height="35" fill="none" stroke="#16a34a" stroke-width="2"/>
      </g>
    </svg>
  `),

  // Blog / Article
  blog: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(400, 300)">
        <!-- Document outline -->
        <rect x="-100" y="-120" width="200" height="240" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Title block -->
        <rect x="-80" y="-100" width="160" height="40" fill="#16a34a" opacity="0.3"/>
        <!-- Text lines -->
        <line x1="-80" y1="-30" x2="80" y2="-30" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="-10" x2="80" y2="-10" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="10" x2="80" y2="10" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="30" x2="50" y2="30" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="60" x2="80" y2="60" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="80" x2="80" y2="80" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
        <line x1="-80" y1="100" x2="60" y2="100" stroke="#16a34a" stroke-width="2" opacity="0.5"/>
      </g>
    </svg>
  `),

  // Video / Camera
  video: encodeDataUri(`
    <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="600" fill="#0a0a0a"/>
      <g transform="translate(370, 300)">
        <!-- Camera body -->
        <rect x="-100" y="-60" width="160" height="120" fill="none" stroke="#16a34a" stroke-width="4"/>
        <!-- Lens -->
        <circle cx="-30" cy="0" r="40" fill="none" stroke="#16a34a" stroke-width="4"/>
        <circle cx="-30" cy="0" r="25" fill="none" stroke="#16a34a" stroke-width="3"/>
        <!-- Viewfinder -->
        <rect x="30" y="-40" width="20" height="20" fill="none" stroke="#16a34a" stroke-width="2"/>
        <!-- Tripod part -->
        <line x1="-20" y1="60" x2="-60" y2="120" stroke="#16a34a" stroke-width="3"/>
        <line x1="20" y1="60" x2="60" y2="120" stroke="#16a34a" stroke-width="3"/>
        <line x1="0" y1="60" x2="0" y2="120" stroke="#16a34a" stroke-width="3"/>
        <!-- Tripod base -->
        <line x1="-60" y1="120" x2="60" y2="120" stroke="#16a34a" stroke-width="4"/>
        <!-- Play button overlay -->
        <path d="M 90 -20 L 150 0 L 90 20 Z" fill="none" stroke="#16a34a" stroke-width="3"/>
      </g>
    </svg>
  `),
};

export default icons;
