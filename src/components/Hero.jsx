import { useEffect, useRef } from 'react'
import './Hero.css'
import logo from '../assets/logo.png'

/* ═══════════════════════════════════════════════════════════
   🏷️  BRAND LOGO — Replace the placeholder below with your logo.
   Option A: Import an image file
     import logo from '../assets/logo.png'
     Then use: <img src={logo} alt="Brand" className="hero-logo" />
   
   Option B: Use a URL
     <img src="https://your-domain.com/logo.png" alt="Brand" className="hero-logo" />
   
   Option C: SVG inline
     Paste your SVG directly in place of the <span> below.
   ═══════════════════════════════════════════════════════════ */

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.5 + 0.1
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 92, 231, ${this.opacity})`
        ctx.fill()
      }
    }

    resize()
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

   const scrollToModules = () => {
    document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* 🏷️ BRAND LOGO — Top-left navbar. Replace the <span> with your <img>. */}
      <nav className="hero-nav">
        <div className="hero-nav-logo">
          { <img src={logo} alt="REALTR" className="hero-logo-img" /> }
         
        </div>
        <button className="hero-nav-cta" onClick={scrollToWaitlist}>
          Join Waitlist
        </button>
      </nav>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Now accepting early access
        </div>

        {/* 🏷️ BRAND LOGO — Large hero logo above the headline. Remove or replace. */}
        <div className="hero-brand-logo">
          { <img src={logo} alt="REALTR" className="hero-brand-logo-img" /> }
        
        </div>

        <h1 className="hero-title">
          The Operating System<br />
          for the <span className="hero-accent">Built Environment</span>
        </h1>
        <p className="hero-subtitle">
          Where architects, engineers, designers, and builders converge. 
          Upload plans. Sell designs. Hire professionals. Manage projects. 
          All in one ecosystem.
        </p>
        <div className="hero-cta-group">
          <button className="hero-cta-primary" onClick={scrollToWaitlist}>
            Join the Waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="hero-cta-secondary" onClick={scrollToModules}>
            Learn more
          </button>
        </div>
        /*<div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">10M+</span>
            <span className="hero-stat-label">Architecture professionals globally</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">8</span>
            <span className="hero-stat-label">Revenue engines at launch</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-number">$75M+</span>
            <span className="hero-stat-label">Projected annual revenue at scale</span>
          </div>
        </div>
      </div>*/
      <div className="hero-scroll-indicator" onClick={scrollToWaitlist}>
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
