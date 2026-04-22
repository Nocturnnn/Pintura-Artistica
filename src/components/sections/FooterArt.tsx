import { motion } from 'framer-motion';
import styles from './FooterArt.module.css';

export function FooterArt() {
  return (
    <footer className={styles.footer}>
      <div className={styles.waveTop} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span>Pintura Artística</span>
          <p>
            Uma landing page autoral construída como mural ilustrado, com arquitetura,
            cultura, natureza e movimento costurados em camadas.
          </p>
        </div>

        <div className={styles.ornaments} aria-hidden="true">
          <motion.div
            className={styles.lotus}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={styles.moon}
            animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className={styles.pillar} />
        </div>
      </div>
    </footer>
  );
}
