import { motion } from 'framer-motion';
import heroVideo from '../assets/hero-video.mp4';
import './HeroMarquee.css';

// Real images from the hero asset CDN — portrait crops
const strips = [
  { type: 'video' as const, src: heroVideo,
    radius: '90px 0px 90px 0px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/GGQuG2gM9TePsmC84XEwEaDl3g.png?scale-down-to=1024&width=800&height=1200',
    radius: '0px 90px 0px 90px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/HfoXDGQsWsPpJU5TGy2N63TFYnc.png?scale-down-to=1024&width=904&height=1200',
    radius: '90px 0px 90px 0px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/mGQ8JCIsW2AAEHxOugX4Lrge2s.png?scale-down-to=1024&width=832&height=1200',
    radius: '0px 90px 0px 90px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/LOSSn1XuJFxdkQeIdkzwe48fY.png?scale-down-to=1024&width=960&height=1200',
    radius: '90px 0px 90px 0px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/Fih75Xv1jAnsMiQgavGmyB6AgI.png?scale-down-to=1024&width=849&height=1200',
    radius: '0px 90px 0px 90px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/7KoODVP3qIVG6WD8OzmYtLeqVVM.png?scale-down-to=1024&width=2400&height=2400',
    radius: '90px 0px 90px 0px' },

  { type: 'image' as const,
    src: 'https://framerusercontent.com/images/zBYuekfQnJhcGfxAd9KoQgwn08.png?scale-down-to=1024&width=2400&height=2400',
    radius: '0px 90px 0px 90px' },
];

// Total width for one set: 8 cards × (240px + 16px gap)
const TOTAL = strips.length * (240 + 16);

export default function HeroMarquee() {
  return (
    <div className="hero-marquee-container">
      <motion.div
        className="hero-strips"
        animate={{ x: [0, -TOTAL] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 32 }}
      >
        {/* 3 sets for seamless infinite loop */}
        {[...strips, ...strips, ...strips].map((strip, index) => (
          <div
            key={index}
            className="hero-strip"
            style={{ borderRadius: strip.radius }}
          >
            {strip.type === 'video' ? (
              <video src={strip.src} autoPlay loop muted playsInline />
            ) : (
              <img src={strip.src} alt={`Hero strip ${index}`} />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
