import type { CSSProperties } from 'react';
import styles from './SceneMural.module.css';

type TempleBlockProps = {
  className?: string;
  style?: CSSProperties;
  tone: 'warm' | 'cool';
  size: 'md' | 'lg' | 'xl';
};

export function TempleBlock({ className = '', style, tone, size }: TempleBlockProps) {
  return (
    <div
      className={[
        styles.templeBlock,
        tone === 'warm' ? styles.templeWarm : styles.templeCool,
        styles[`temple${size.toUpperCase()}` as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-hidden="true"
    >
      <span className={styles.templeRoof} />
      <span className={styles.templeRoofInner} />
      <span className={styles.templeBody} />
      <span className={styles.templeSteps} />
      <span className={styles.templeDoor} />
      <span className={styles.templePillarLeft} />
      <span className={styles.templePillarRight} />
    </div>
  );
}
