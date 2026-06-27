import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialCard.css';

interface TestimonialProps {
  testimonials: {
    quote: string;
    author: string;
    role: string;
    image: string;
  }[];
}

export default function TestimonialsSection({ testimonials }: TestimonialProps) {
  const [active, setActive] = useState(0);

  // Auto-cycle every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="testimonials-zenify">
      <div className="testimonials-zenify-inner">
        {/* Left: numbered list */}
        <div className="testimonials-nav">
          {testimonials.map((t, i) => (
            <button
              key={i}
              className={`testimonial-nav-btn${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="nav-num">0{i + 1}</span>
              <span className="nav-bar" />
              <span className="nav-name">{t.author}</span>
            </button>
          ))}
        </div>

        {/* Right: big quote */}
        <div className="testimonials-quote-area">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="testimonial-quote-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="testimonial-big-quote">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="testimonial-author-row">
                <img
                  src={testimonials[active].image}
                  alt={testimonials[active].author}
                  className="testimonial-avatar"
                />
                <div>
                  <div className="testimonial-author-name">{testimonials[active].author}</div>
                  <div className="testimonial-author-role">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
