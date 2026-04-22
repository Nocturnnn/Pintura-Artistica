import { motion } from 'framer-motion';
import styles from './SceneMural.module.css';

type LanternGroupProps = {
  compact?: boolean;
};

const lanterns = [
  { id: 'a', className: styles.lanternA, delay: 0 },
  { id: 'b', className: styles.lanternB, delay: 0.3 },
  { id: 'c', className: styles.lanternC, delay: 0.6 },
  { id: 'd', className: styles.lanternD, delay: 0.9 },
  { id: 'e', className: styles.lanternE, delay: 1.2 },
];

export function LanternGroup({ compact = false }: LanternGroupProps) {
  return (
    <div className={styles.lanternGroup} aria-hidden="true">
      {lanterns.map((lantern) => (
        <motion.div
          key={lantern.id}
          className={`${styles.lantern} ${lantern.className}`}
          animate={{
            y: compact ? [0, -7, 0] : [0, -12, 0],
            rotate: compact ? [0, 2.2, 0, -1.6, 0] : [0, 3.5, 0, -2.6, 0],
          }}
          transition={{
            duration: compact ? 4.8 : 6.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: lantern.delay,
          }}
        >
          <span className={styles.lanternString} />
          <span className={styles.lanternBody}>
            <span className={styles.lanternGlow} />
          </span>
        </motion.div>
      ))}
    </div>
  );
}
