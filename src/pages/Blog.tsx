import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    title: 'Inside the Studio: Our Process for Crafting a Standout Identity',
    date: 'May 23, 2025',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'From Sketch to Screen: How Ideas Evolve Into Impactful Designs',
    date: 'May 23, 2025',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Why Every Brand Needs a Signature Visual Language',
    date: 'May 23, 2025',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <motion.div
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="blog-hero">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Insights.
        </motion.h1>
      </section>

      <section className="blog-grid">
        {posts.map((post, i) => (
          <Link to="#" key={i} className="blog-card">
            <motion.div
              className="blog-image-wrapper"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <img src={post.image} alt={post.title} />
            </motion.div>
            <div className="blog-info">
              <span className="blog-date">{post.date}</span>
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </section>
    </motion.div>
  );
}
