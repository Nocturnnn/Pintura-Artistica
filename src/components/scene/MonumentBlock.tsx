import type { CSSProperties } from 'react';
import styles from './SceneMural.module.css';

type MonumentBlockProps = {
  className?: string;
  style?: CSSProperties;
  kind: 'spire' | 'stupa' | 'gate';
};

export function MonumentBlock({ className = '', style, kind }: MonumentBlockProps) {
  return (
    <div
      className={[
        styles.monumentBlock,
        styles[`monument${kind[0].toUpperCase()}${kind.slice(1)}` as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-hidden="true"
    >
      <span className={styles.monumentBase} />
      <span className={styles.monumentCore} />
      <span className={styles.monumentTop} />
      <span className={styles.monumentAccent} />
    </div>
  );
}
