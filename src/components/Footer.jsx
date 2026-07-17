/* ═══════════════════════════════════════════════════════════
   🏷️  BRAND LOGO — Update the footer logo below.
   Replace the <span> placeholder with your <img>.
   ═══════════════════════════════════════════════════════════ */
import './Footer.css'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            {/* 🏷️ BRAND LOGO — Replace with: <img src={logo} alt="BEOS" className="footer-logo-img" /> */}
            <img src={logo} alt="BEOS" className="footer-logo-img h-60px"  />
            <span className="footer-logo-text">REALTR</span>
          </div>
          <p className="footer-tagline">
            The global operating system for the built environment.
          </p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} BEOS. All rights reserved.</span>
          <span className="footer-dot">·</span>
          <a href="#waitlist" className="footer-link">Join Waitlist</a>
        </div>
      </div>
    </footer>
  )
}
