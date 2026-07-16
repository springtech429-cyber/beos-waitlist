/* ═══════════════════════════════════════════════════════════
   🏷️  BRAND LOGO — Update the footer logo below.
   Replace the <span> placeholder with your <img>.
   ═══════════════════════════════════════════════════════════ */
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            {/* 🏷️ BRAND LOGO — Replace with: <img src={logo} alt="BEOS" className="footer-logo-img" /> */}
            <span className="footer-logo-icon">◈</span>
            <span className="footer-logo-text">BEOS</span>
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
