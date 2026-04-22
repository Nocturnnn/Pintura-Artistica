import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { HighlightItem } from '../../types';
import styles from './HighlightCards.module.css';

type HighlightCardsProps = {
  items: HighlightItem[];
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export function HighlightCards({ items }: HighlightCardsProps) {
  return (
    <section className={styles.section} aria-labelledby="destaques-title">
      <div className={styles.heading}>
        <span>Universo visual</span>
        <h2 id="destaques-title">Quatro portas de entrada para o mural</h2>
      </div>

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {items.map((highlight) => (
          <motion.article
            key={highlight.id}
            className={styles.card}
            variants={item}
            whileHover={{ y: -8, rotate: -0.4 }}
            style={{ '--accent': highlight.accent } as CSSProperties}
          >
            <div className={styles.iconWrap}>{highlight.art}</div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
