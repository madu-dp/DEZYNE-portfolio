import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicesCarousel.css';

const services = [
  { id: '001', title: 'UI/UX DESIGN', desc: 'Clean, user-focused designs that improve usability and create better digital experiences.', color: '#E8DDFF' },
  { id: '002', title: 'CUSTOME WEB DEVELOPMENT', desc: 'Beautiful and functional websites built with purpose and precision.', color: '#CFFFA4' },
  { id: '003', title: 'WORDPRESS DEVELOPMENT', desc: 'Custom WordPress websites that are flexible, easy to manage, and built for growth.', color: '#FFF2B2' },
  { id: '004', title: 'SEO OPTIMIZATION', desc: 'Get found faster with tailored SEO strategies backed by real data.', color: '#FFD3CD' }
];

export default function ServicesCarousel() {
  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Services.</h2>
        <Link to="/contact" className="view-all-link">( START A PROJECT )</Link>
      </div>

      <div className="services-carousel-wrapper">
        <div className="services-carousel">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              className="service-card"
              style={{ backgroundColor: service.color }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ type: "spring", damping: 20, stiffness: 100, delay: i * 0.1 }}
            >
              <div className="service-header">
                <span className="service-id">( {service.id} )</span>
              </div>
              <div className="service-icon">
                {/* Abstract shape placeholder, could use real SVGs */}
                <div className="abstract-shape"></div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
