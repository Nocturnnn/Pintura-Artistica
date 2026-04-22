import { motion } from 'framer-motion';
import styles from './SceneMural.module.css';

type RiverLayerProps = {
  compact?: boolean;
};

export function RiverLayer({ compact = false }: RiverLayerProps) {
  return (
    <div className={styles.riverScene} aria-hidden="true">
      <div className={styles.riverTop} />
      <div className={styles.riverMid} />
      <motion.div
        className={styles.riverPattern}
        animate={{ x: compact ? [0, 6, 0] : [0, 12, 0] }}
        transition={{ duration: compact ? 7 : 10, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.riverShine}
        animate={{ x: compact ? [0, -10, 0] : [0, -16, 0] }}
        transition={{ duration: compact ? 9 : 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={styles.lotusLine}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
