import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorSize = isHovering ? 64 : 16;
  const cursorOffset = cursorSize / 2;

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - cursorOffset);
      cursorY.set(e.clientY - cursorOffset);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('home-project-card') ||
        target.classList.contains('project-card')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, cursorOffset]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
        backgroundColor: isHovering ? 'rgba(0, 68, 255, 0.1)' : 'var(--text-primary)',
        backdropFilter: isHovering ? 'blur(4px)' : 'none',
        border: isHovering ? '1px solid rgba(0, 68, 255, 0.5)' : 'none',
      }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span 
            className="cursor-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
