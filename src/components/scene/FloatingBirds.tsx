import { motion } from 'framer-motion';
import styles from './SceneMural.module.css';

type FloatingBirdsProps = {
  compact?: boolean;
};

const birdGroups = [
  { id: 'group-a', className: styles.birdGroupA, duration: 6.5 },
  { id: 'group-b', className: styles.birdGroupB, duration: 8.5 },
  { id: 'group-c', className: styles.birdGroupC, duration: 7.2 },
];

export function FloatingBirds({ compact = false }: FloatingBirdsProps) {
  return (
    <>
      {birdGroups.map((group) => (
        <motion.div
          key={group.id}
          className={`${styles.birdCluster} ${group.className}`}
          animate={{
            y: compact ? [0, -5, 0] : [0, -8, 0],
            x: compact ? [0, 4, 0] : [0, 8, 0],
          }}
          transition={{
            duration: group.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </motion.div>
      ))}
    </>
  );
}
