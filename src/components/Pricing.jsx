import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Explorer',
      price: 'Free',
      period: '',
      desc: 'Students, graduates, hobbyists',
      features: [
        'Public profile & portfolio',
        '5 project uploads',
        'Basic messaging',
        'Reviews & ratings',
        'Basic analytics',
        'Community access',
      ],
      highlight: false,
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$24',
      period: '/month',
      desc: 'Independent professionals & freelancers',
      features: [
        'Unlimited projects & listings',
        'CAD, BIM & 3D uploads',
        'Client inquiries',
        'Project licensing',
        'Advanced analytics',
        'AI credits (500/mo)',
        '100 GB storage',
        'Priority support',
      ],
      highlight: true,
      cta: 'Join Waitlist',
    },
    {
      name: 'Studio',
      price: '$99',
      period: '/month',
      desc: 'Architecture & engineering firms',
      features: [
        'Up to 10 team members',
        'Shared workspace & assets',
        'Company profile & branding',
        'Team analytics',
        '500 GB shared storage',
        'API access',
        '5,000 AI credits/mo',
        'Internal messaging',
      ],
      highlight: false,
      cta: 'Join Waitlist',
    },
    {
      name: 'Business',
      price: '$299',
      period: '/month',
      desc: 'Growing firms & consultancies',
      features: [
        'Up to 50 team members',
        'Multi-office support',
        'CRM & client portal',
        'Proposal builder',
        'Contracts & billing',
        'Recruitment tools',
        '2 TB storage',
        '20,000 AI credits/mo',
        'Approval workflows',
      ],
      highlight: false,
      cta: 'Join Waitlist',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'Governments, developers, large orgs',
      features: [
        'Unlimited seats',
        'SSO & audit logs',
        'Procurement workflows',
        'Private marketplaces',
        'Dedicated infrastructure',
        'Custom integrations',
        'Compliance tools',
        'AI assistants',
      ],
      highlight: false,
      cta: 'Contact Us',
    },
  ]

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section pricing-section">
      <div className="pricing-header">
        <span className="section-label">Pricing</span>
        <h2 className="section-title">Price for What It's Becoming</h2>
        <p className="section-subtitle">
          Don't price for what the app is today. Price for what your ecosystem is becoming. 
          Subscriptions are just one engine — transactions, AI, and promotions add compounding revenue.
        </p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`} key={i}>
            {plan.highlight && <div className="pricing-card-badge">Most Popular</div>}
            <div className="pricing-card-top">
              <h3 className="pricing-card-name">{plan.name}</h3>
              <div className="pricing-card-price">
                <span className="pricing-card-amount">{plan.price}</span>
                {plan.period && <span className="pricing-card-period">{plan.period}</span>}
              </div>
              <p className="pricing-card-desc">{plan.desc}</p>
            </div>
            <ul className="pricing-card-features">
              {plan.features.map((f, j) => (
                <li key={j}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <button 
              className={`pricing-card-cta ${plan.highlight ? 'pricing-card-cta--highlight' : ''}`}
              onClick={scrollToWaitlist}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="pricing-engines">
        <h3 className="pricing-engines-title">Revenue Engines Beyond Subscriptions</h3>
        <div className="pricing-engines-grid">
          {[
            { icon: '⟐', title: 'Transaction Fees', desc: '5–15% commission on sales, lower for subscribers' },
            { icon: '◈', title: 'Promoted Listings', desc: 'Featured placement, homepage spots, trending badges' },
            { icon: '✦', title: 'AI Services', desc: 'Rendering, staging, estimates, proposals, compliance' },
            { icon: '☁', title: 'Cloud Storage', desc: 'Tiered storage for large BIM & CAD files' },
            { icon: '⬢', title: 'Hiring & Recruitment', desc: 'Job listings, recruiter dashboards, talent pools' },
            { icon: '◎', title: 'SaaS Tools', desc: 'CRM, invoicing, project management, client portals' },
          ].map((engine, i) => (
            <div className="engine-card" key={i}>
              <span className="engine-card-icon">{engine.icon}</span>
              <div>
                <h4 className="engine-card-title">{engine.title}</h4>
                <p className="engine-card-desc">{engine.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
