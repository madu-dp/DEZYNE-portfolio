import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQAccordion.css';

const faqs = [
  { question: "What services do you offer?", answer: "I provide UI/UX design, website development, and WordPress solutions. From design to launch, I handle the complete process of building modern, user-friendly websites." },
  { question: "How long does it take to complete a project?", answer: "Project timelines depend on the scope and complexity. A standard website usually takes 1–3 weeks, while larger or custom projects may take longer." },
  { question: "How much does a website cost?", answer: "Pricing varies based on your requirements, features, and design complexity. Contact me with your project details, and I’ll provide a custom quote." },
  { question: "Do you design before development?", answer: "Yes. I start with UI/UX design to ensure the layout and user experience are perfect before moving into development." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely. All websites I create are fully responsive and optimized for mobile, tablet, and desktop devices." },
  { question: "Can I update the website myself?", answer: "Yes. Especially with WordPress websites, you’ll be able to easily manage and update content without technical knowledge." },
  { question: "Do you provide support after the project is completed?", answer: "Yes, I offer post-launch support and can assist with updates, maintenance, and improvements if needed." },
  { question: "What do you need from me to get started?", answer: "I’ll need basic information about your business, goals, content (text/images), and any design references you like." },
  { question: "Do you redesign existing websites?", answer: "Yes, I can redesign and improve your current website to enhance usability, performance, and visual appeal." },
  { question: "Will my website be SEO-friendly?", answer: "I follow best practices to ensure your website is optimized for search engines, helping improve visibility online." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button 
            className={`faq-question ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <div className="faq-icon">
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div 
                className="faq-answer-wrapper"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
