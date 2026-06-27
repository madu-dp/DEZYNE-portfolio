import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, Plus } from 'lucide-react';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/Project2.png';
import hoodieVideo from '../assets/Hoodie.mp4';
import heroVideo from '../assets/hero-video.mp4';
import './ProjectDetail.css';

const projectData = {
  'forme-hoodie': {
    title: 'FORME HOODIE',
    description: 'A sharp product story built around clean visuals, strong contrast, and a cinematic reveal.',
    visitUrl: 'https://www.figma.com/proto/Mqjdgf4nGAVrp4b3ft7DcB/Project1?node-id=106-80&viewport=224%2C19%2C0.18&t=Os85ExImDMYLuWKo-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    metadata: [
      { label: 'Year', value: '2026' },
      { label: 'Services', value: 'Web Design' },
    ],
    video: hoodieVideo,
    images: [
      project1Img,
    ],
    moreProjects: [
      { id: 'naadlak-entertainment', title: 'NAADLAK ENTERTAINMENT', image: project2Img }
    ]
  },
  'naadlak-entertainment': {
    title: 'NAADLAK ENTERTAINMENT',
    description: 'A cinematic event and AV showcase with a dark, premium presentation and clean call-to-action flow.',
    visitUrl: 'https://www.naadlak.lk/',
    metadata: [
      { label: 'Year', value: '2026' },
      { label: 'Services', value: 'Web Design + Web Development' },
    ],
    video: heroVideo,
    images: [
      project2Img,
    ],
    moreProjects: [
      { id: 'forme-hoodie', title: 'FORME HOODIE', image: project1Img }
    ]
  },
} as const;

// Stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const metaRow = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = (id && projectData[id as keyof typeof projectData]) || projectData['forme-hoodie'];
  const isExternalVisitLink = project.visitUrl.startsWith('http');

  // Scroll to top when project detail opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  return (
    <motion.div
      className="project-detail-page"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="project-detail-layout"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Sticky Details */}
        <div className="project-sticky-col">
          <motion.div className="project-sticky-content">
            <Link to="/#latest-projects" className="back-home-btn">← Back to Home</Link>
            <motion.h1 variants={fadeUp}>{project.title}</motion.h1>
            <motion.p className="project-description" variants={fadeUp}>
              {project.description}
            </motion.p>

            <motion.div className="project-metadata" variants={containerVariants}>
              {project.metadata.map((item, i) => (
                <motion.div className="metadata-row" key={i} variants={metaRow}>
                  <span className="meta-label">{item.label}</span>
                  <span className="meta-value">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href={project.visitUrl}
              target={isExternalVisitLink ? '_blank' : undefined}
              rel={isExternalVisitLink ? 'noopener noreferrer' : undefined}
              className="visit-project-btn"
              variants={fadeUp}
            >
              <span>Visit Project</span>
              <ExternalLink size={16} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Column: Video then Image Stack */}
        <div className="project-images-col">
          <motion.div className="project-video-block" variants={scaleIn}>
            <video src={project.video} autoPlay loop muted playsInline />
          </motion.div>

          {project.images.map((img, i) => (
            <motion.div
              key={i}
              className="project-image-block"
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <img src={img} alt={`${project.title} showcase ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* More Projects Section */}
      <section className="more-projects-section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          More projects.
        </motion.h2>
        <div className="more-projects-grid">
          {project.moreProjects.map((p, i) => (
            <Link to={`/projects/${p.id}`} key={i} className="more-project-card">
              <motion.div
                className="more-project-image"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              >
                <img src={p.image} alt={p.title} />
                <div className="project-overlay">
                  <span>( 0{i + 1} )</span>
                  <span>{p.title}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="project-cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2>Have a project<br/>in mind?</h2>
          <p>Reach out today to discuss how we can<br/>help you build the brand of your dreams.</p>
          <Link to="/contact" className="lets-talk-btn">
            <span>Let's Talk</span>
            <Plus size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
