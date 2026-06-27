import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/Project2.png';
import './Projects.css';

const projects = [
  {
    title: 'Forme Hoodie',
    id: 'forme-hoodie',
    image: project1Img,
  },
  {
    title: 'Naadlak Entertainment',
    id: 'naadlak-entertainment',
    image: project2Img,
  },
];

export default function Projects() {
  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <section className="projects-hero">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Projects.
        </motion.h1>
        <motion.p
          className="projects-sub"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Every case study we've completed in a single spot to help you grow
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Link to="/contact" className="lets-talk-btn">
            <span>Let's Talk</span>
            <Plus size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </section>

      <section className="projects-grid">
        {projects.map((project, i) => (
          <Link to={`/projects/${project.id}`} key={i} className="project-card">
            <motion.div
              className="project-image-wrapper"
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: (i % 2) * 0.1
              }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <span>( 00{i + 1} )</span>
                <span>{project.title}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>
    </motion.div>
  );
}
