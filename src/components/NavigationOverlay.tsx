import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import './NavigationOverlay.css';
import Logo from '../assets/Logo.png';

interface NavigationOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { path: '/', label: 'Home', number: '_01' },
  { path: '/projects', label: 'Projects', number: '_02' },
  { path: '/about', label: 'About', number: '_03' },
  { path: '/contact', label: 'Contact', number: '_04' },
];

export default function NavigationOverlay({ isOpen, onClose }: NavigationOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="nav-overlay"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="nav-header">
            <Link to="/" className="logo" onClick={onClose}>
              <img src={Logo} alt="DZ" className="site-logo" />
            </Link>
            <button className="menu-toggle close" onClick={onClose}>
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="nav-content">
            <div className="nav-links-container">
              {navLinks.map((link, i) => (
                <div key={link.path} className="nav-link-wrapper">
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link to={link.path} className="massive-nav-link" onClick={onClose}>
                      <span className="nav-number">({link.number})</span>
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="nav-sidebar">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="nav-contact"
              >
                <div className="nav-section">
                  <p className="nav-label">Get in touch</p>
                  <a href="mailto:dezyne03@gmail.com" className="nav-email">dezyne03@gmail.com</a>
                </div>
                
                <div className="nav-section">
                  <p className="nav-label">Socials</p>
                  <div className="nav-socials">
                    <a href="#">LinkedIn</a>
                    <span>/</span>
                    <a href="#">Instagram</a>
                    <span>/</span>
                    <a href="#">Facebook</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
