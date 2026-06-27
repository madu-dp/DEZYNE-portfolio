import { motion } from 'framer-motion'
import FAQAccordion from '../components/FAQAccordion'
import './Contact.css'

export default function Contact() {
  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7 }}
    >
      <section className="contact-hero-grid">
        <div className="contact-left">
          <h1>Get in touch.</h1>

          <div className="contact-socials">
            <a href="#">LI</a>
            <a href="#">IG</a>
            <a href="#">FB</a>
          </div>

          <a className="contact-email" href="mailto:hello@example.com">dezyne03@gmail.com</a>
        </div>

        <div className="contact-right">
          <h3>Say hello</h3>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input name="name" placeholder="Your name" />
            </div>

            <div className="input-group">
              <input name="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <textarea name="message" placeholder="Message" />
            </div>

            <button className="submit-button" type="submit">Send</button>
          </form>
        </div>
      </section>

      <section className="contact-faq">
        <div className="faq-layout">
          <div className="faq-title">
            <h2>Need help?</h2>
          </div>
          <div className="faq-content">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </motion.div>
  )
}
