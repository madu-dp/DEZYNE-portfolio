import { motion } from 'framer-motion';
import './About.css';

const career = [
  {
    company: 'SoftedgeLab',
    role: 'Associate Software Engineer',
    period: 'Feb 2026 – Present',
  },
  {
    company: 'SoftedgeLab',
    role: 'Junior UI/UX Engineer (Internship)',
    period: 'Aug 2025 – Feb 2026',
  },
  {
    company: 'Freelance',
    role: '',
    period: '2025 – Present',
  },
];

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <section className="about-hero">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          I'm Madushi Tharaka. — a creative studio cultivating bold brands, beautiful websites, and ideas that refuse to be ordinary.
        </motion.h1>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <h2>$250M+</h2>
          <p>Capital raised by brands we helped out.</p>
        </div>
        <div className="stat-card">
          <h2>50+</h2>
          <p>Brands launched through our creative process.</p>
        </div>
        <div className="stat-card">
          <h2>15</h2>
          <p>Awards recognizing our branding excellence.</p>
        </div>
        <div className="stat-card">
          <h2>100%</h2>
          <p>Client satisfaction rate across all delivered work.</p>
        </div>
      </section>

      {/* Career Section */}
      <section className="about-career-section">
        <div className="career-header">
          <span>( CAREER )</span>
          <h3>A Journey Through My Professional Experience</h3>
        </div>
        <div className="career-timeline">
          {career.map((item, i) => (
            <motion.div
              className="career-item"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.1 }}
            >
              <div className="career-left">
                <h4>{item.company}</h4>
                {item.role && <p className="career-role">{item.role}</p>}
              </div>
              <div className="career-right">
                <span className="career-period">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
