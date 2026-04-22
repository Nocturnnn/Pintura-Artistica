import { motion } from 'framer-motion';
import styles from './SceneMural.module.css';

type DecorativeSkyProps = {
  compact?: boolean;
};

export function DecorativeSky({ compact = false }: DecorativeSkyProps) {
  return (
    <div className={styles.skyScene} aria-hidden="true">
      <motion.div
        className={styles.cloudBand}
        animate={{ x: compact ? [0, 8, 0] : [0, 14, 0] }}
        transition={{ duration: compact ? 11 : 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.cloudBand} ${styles.cloudBandSecondary}`}
        animate={{ x: compact ? [0, -10, 0] : [0, -18, 0] }}
        transition={{ duration: compact ? 12 : 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={styles.sunHalo}>
        <div className={styles.sunCore} />
      </div>
      <div className={styles.dotCloudLeft} />
      <div className={styles.dotCloudRight} />
      <div className={styles.bannerLeft} />
      <div className={styles.bannerRight} />
    </div>
  );
}
