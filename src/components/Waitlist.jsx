import { useEffect, useRef, useState } from 'react'
import './Waitlist.css'

export default function Waitlist() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className={`waitlist-section ${isVisible ? 'waitlist-section--visible' : ''}`}
    >
      <div className="waitlist-inner">
        <div className="waitlist-left">
          <span className="section-label">Early Access</span>
          <h2 className="section-title">Join the Waitlist</h2>
          <p className="waitlist-description">
            Be among the first to access the Built Environment Operating System. 
            Early members get priority onboarding, founding-member pricing, 
            and direct input into platform development.
          </p>

          <div className="waitlist-perks">
            {[
              { icon: '✦', title: 'Founding Member Pricing', desc: 'Lock in early rates for life' },
              { icon: '◈', title: 'Priority Onboarding', desc: 'Skip the queue when we launch' },
              { icon: '⬡', title: 'Shape the Product', desc: 'Direct feedback channel to the founders' },
              { icon: '☁', title: 'Bonus Storage', desc: 'Extra cloud storage for early adopters' },
            ].map((perk, i) => (
              <div className="waitlist-perk" key={i}>
                <span className="waitlist-perk-icon">{perk.icon}</span>
                <div>
                  <strong>{perk.title}</strong>
                  <span>{perk.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="waitlist-right">
          <div className="waitlist-form-container">
            <div className="waitlist-form-glow" />
            <iframe
              src="https://tally.so/embed/q4M8QG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="BEOS Waitlist"
              className="waitlist-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
