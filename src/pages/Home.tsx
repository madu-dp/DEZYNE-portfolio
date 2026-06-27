import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroMarquee from '../components/HeroMarquee';
import ServicesCarousel from '../components/ServicesCarousel';
import TestimonialCard from '../components/TestimonialCard';
import FAQAccordion from '../components/FAQAccordion';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/Project2.png';
import './Home.css';

const projects = [
  { title: 'FORME HOODIE', id: 'forme-hoodie', date: '05.26', image: project1Img },
  { title: 'NAADLAK ENTERTAINMENT', id: 'naadlak-entertainment', date: '06.26', image: project2Img },
];

const testimonials = [
  {
    quote: "Working with Dezyne felt like hiring a creative greenhouse for our ideas. Everything grew faster and brighter than we imagined.",
    author: "Sarah Conor",
    role: "Founder, Clonify",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "Working with Dezyne was a game-changer. They didn't just design our brand — they captured its soul. Everything feels elevated, intentional, and totally us.",
    author: "Bruce Lee",
    role: "Design Director, Malz",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    quote: "From concept to launch, the Dezyne team delivered with clarity, creativity, and style. We've never looked more professional — or more ourselves.",
    author: "John Headphone",
    role: "UFO, Marcom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  }
];

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#latest-projects') {
      const el = document.getElementById('latest-projects');
      if (el) {
        const headerOffset = 100;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 1. Hero Title */}
      <section className="home-hero-text">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          DEZYNE
        </motion.h1>
      </section>

      {/* 1.5 Hero Subtext & Socials */}
      <section className="home-hero-sub">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From strategy to design and development — everything handled in one place.
        </motion.p>
        <motion.div 
          className="home-hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a href="#">LI</a> / <a href="#">IG</a> / <a href="#">FB</a>
        </motion.div>
      </section>

      {/* 2. Hero Marquee */}
      <HeroMarquee />

      {/* 3. Intro Text & Client Logos */}
      <section className="home-intro">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.2 }}
        >
          We'DEZYNE — We help businesses turn ideas into powerful, user-friendly websites using UI/UX design, modern web technologies, and WordPress.
        </motion.p>
        
        <motion.div 
          className="tech-marquee-wrapper"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="tech-marquee-content">
            {/* Double the list for infinite scroll effect */}
            {[...Array(2)].map((_, arrayIndex) => (
              <div className="tech-marquee-track" key={arrayIndex} aria-hidden={arrayIndex === 1}>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/figma/white" alt="Figma" className="tech-icon" />
                  Figma
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/wordpress/white" alt="WordPress" className="tech-icon" />
                  WordPress
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/html5/white" alt="HTML5" className="tech-icon" />
                  HTML
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/css3/white" alt="CSS3" className="tech-icon" />
                  CSS
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/react/white" alt="React" className="tech-icon" />
                  React
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/javascript/white" alt="JavaScript" className="tech-icon" />
                  JavaScript
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/typescript/white" alt="TypeScript" className="tech-icon" />
                  TypeScript
                </div>
                <div className="logo-item">
                  <img src="https://cdn.simpleicons.org/framer/white" alt="Framer" className="tech-icon" />
                  Framer
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. Latest Projects */}
      <section id="latest-projects" className="home-projects">
        <div className="section-header">
          <div>
            <h2>Latest<br/>Works.</h2>
            <p className="projects-subtext">Every case study we've completed in a single spot to help you grow</p>
          </div>
          <Link to="/projects" className="view-all-link">( VIEW ALL )</Link>
        </div>
        
        <div className="home-projects-grid">
          {projects.slice(0, 6).map((project, i) => (
            <Link to={`/projects/${project.id}`} key={i} className="home-project-card">
              <motion.div
                className="home-project-image"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: "spring", damping: 20, stiffness: 100, delay: (i % 2) * 0.1 }}
              >
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>( 00{i + 1} )</span>
                  <span>{project.title}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Scroll to latest projects when hash present */}
      {/* Runs on mount and when location.hash changes */}
      { /* useEffect-like scroll handled via side-effect */ }

      {/* 5. Services */}
      <ServicesCarousel />

      {/* 6. Video / Stats */}
      <section className="home-stats-section">
        <h2>Dezyne is a creative studio shaping bold brands and daring ideas.</h2>
        
        <div className="video-container">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" alt="Video Placeholder" />
          <button className="play-btn">
            <Play fill="currentColor" size={24} />
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <h3>8+</h3>
            <p>projects completed, delivering clean and effective digital solutions.</p>
          </div>
          <div className="stat">
            <h3>4+</h3>
            <p>clients worked with, delivering clean and impactful digital solutions.</p>
          </div>
          <div className="stat">
            <h3>1+</h3>
            <p>Years of experience in modern web design and development.</p>
          </div>
          <div className="stat">
            <h3>98%</h3>
            <p>Client satisfaction rate across<br/> all delivered work.</p>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="home-testimonials">
        <div className="testimonials-header">
          <p className="subtitle">( TESTIMONIALS )</p>
          <h2>Trusted by Clients <br/>I’ve Worked With.</h2>
        </div>
        <TestimonialCard testimonials={testimonials} />
      </section>

      {/* 8. FAQ */}
      <section className="home-faq">
        <div className="faq-layout">
          <div className="faq-title">
            <h2>FAQ</h2>
          </div>
          <div className="faq-content">
            <FAQAccordion />
          </div>
        </div>
      </section>

    </motion.div>
  );
}
