import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import styles from './SceneMural.module.css';

type CulturalObjectProps = {
  className?: string;
  style?: CSSProperties;
  kind: 'sun' | 'boat' | 'plate' | 'kite' | 'mask' | 'figure' | 'elephant';
};

export function CulturalObject({ className = '', style, kind }: CulturalObjectProps) {
  const animation =
    kind === 'boat'
      ? { y: [0, -6, 0], rotate: [0, -1.6, 0, 1.6, 0] }
      : kind === 'kite'
        ? { y: [0, -8, 0], x: [0, 5, 0] }
        : kind === 'figure'
          ? { y: [0, -4, 0] }
          : { y: [0, -3, 0] };

  return (
    <motion.div
      className={[
        styles.object,
        styles[`object${kind[0].toUpperCase()}${kind.slice(1)}` as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      animate={animation}
      transition={{
        duration: kind === 'boat' ? 6.8 : 5.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    >
      <span className={styles.objectShape} />
      <span className={styles.objectAccent} />
      <span className={styles.objectDetail} />
    </motion.div>
  );
}
