import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { DetailItem } from '../../types';
import styles from './InteractiveDetails.module.css';

type InteractiveDetailsProps = {
  items: DetailItem[];
};

export function InteractiveDetails({ items }: InteractiveDetailsProps) {
  return (
    <section id="detalhes" className={styles.section} aria-labelledby="details-title">
      <div className={styles.heading}>
        <span>Detalhes interativos</span>
        <h2 id="details-title">Pequenos focos de reação espalhados pela composição</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <motion.article
            key={item.id}
            className={styles.detail}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{ '--tone': item.tone } as CSSProperties}
          >
            <div className={styles.badge} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
