import './Ecosystem.css'

export default function Ecosystem() {
  const nodes = [
    { label: 'Marketplace', top: true, icon: '◆' },
    { label: 'Design Assets', col: 0, icon: '⬡' },
    { label: 'Professional Network', col: 1, icon: '◎' },
    { label: 'Hiring', col: 2, icon: '⬢' },
    { label: 'AI Tools', col: 0, row: 1, icon: '✦' },
    { label: 'Collaboration', col: 1, row: 1, icon: '⬡' },
    { label: 'Payments', col: 2, row: 1, icon: '◇' },
    { label: 'Cloud Storage', col: 0, row: 2, icon: '☁' },
    { label: 'Construction Data', col: 1, row: 2, icon: '▦' },
    { label: 'CRM', col: 2, row: 2, icon: '◎' },
  ]

  return (
    <section className="section ecosystem-section">
      <div className="ecosystem-header">
        <span className="section-label">The Architecture</span>
        <h2 className="section-title">Built Environment OS</h2>
        <p className="section-subtitle">
          Everything connects through one unified platform. Each module strengthens 
          the others, creating compounding network effects.
        </p>
      </div>
      <div className="ecosystem-diagram">
        <svg className="ecosystem-svg" viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <line x1="300" y1="72" x2="120" y2="160" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="300" y1="72" x2="300" y2="160" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="300" y1="72" x2="480" y2="160" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          
          <line x1="120" y1="190" x2="120" y2="260" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="300" y1="190" x2="300" y2="260" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="480" y1="190" x2="480" y2="260" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          
          <line x1="120" y1="290" x2="120" y2="360" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="300" y1="290" x2="300" y2="360" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="480" y1="290" x2="480" y2="360" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          
          <line x1="120" y1="390" x2="300" y2="440" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="300" y1="390" x2="300" y2="440" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>
          <line x1="480" y1="390" x2="300" y2="440" stroke="rgba(108,92,231,0.2)" strokeWidth="1" strokeDasharray="4 4"/>

          {/* Top node - Marketplace */}
          <rect x="210" y="36" width="180" height="48" rx="12" fill="rgba(108,92,231,0.15)" stroke="rgba(108,92,231,0.5)" strokeWidth="1.5"/>
          <text x="300" y="65" textAnchor="middle" fill="#a29bfe" fontSize="15" fontWeight="700">◆ Marketplace</text>

          {/* Row 1 */}
          <rect x="36" y="152" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="120" y="179" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">⬡ Design Assets</text>
          
          <rect x="216" y="152" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="300" y="179" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">◎ Pro Network</text>
          
          <rect x="396" y="152" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="480" y="179" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">⬢ Hiring</text>

          {/* Row 2 */}
          <rect x="36" y="252" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="120" y="279" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">✦ AI Tools</text>
          
          <rect x="216" y="252" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="300" y="279" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">⬡ Collaboration</text>
          
          <rect x="396" y="252" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="480" y="279" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">◇ Payments</text>

          {/* Row 3 */}
          <rect x="36" y="352" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="120" y="379" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">☁ Cloud Storage</text>
          
          <rect x="216" y="352" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="300" y="379" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">▦ Construction Data</text>
          
          <rect x="396" y="352" width="168" height="44" rx="10" fill="rgba(108,92,231,0.08)" stroke="rgba(108,92,231,0.25)" strokeWidth="1"/>
          <text x="480" y="379" textAnchor="middle" fill="#9898b0" fontSize="13" fontWeight="500">◎ CRM</text>

          {/* Bottom - Enterprise */}
          <rect x="180" y="420" width="240" height="48" rx="12" fill="rgba(108,92,231,0.15)" stroke="rgba(108,92,231,0.5)" strokeWidth="1.5"/>
          <text x="300" y="449" textAnchor="middle" fill="#a29bfe" fontSize="15" fontWeight="700">⬡ Enterprise Solutions</text>
        </svg>
      </div>
    </section>
  )
}
