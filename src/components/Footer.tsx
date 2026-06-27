import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-cta">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              We’d love to hear from you — whether you have a project in mind, or just want to say hi.
            </motion.h2>
            <motion.a 
              href="mailto:dezyne03@gmail.com"
              className="footer-email"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              dezyne03@gmail.com
            </motion.a>
          </div>
          
          <div className="footer-newsletter">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Join our newsletter
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Daily dose of design trends by the team.
            </motion.p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" required />
              <button type="submit">SEND</button>
            </form>
          </div>

          <div className="footer-nav">
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">( ©2026 DEZYNE. All Rights Reserved. )</div>
          <div className="footer-socials">
            <a href="#">LinkedIn</a> / <a href="#">Instagram</a> / <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
