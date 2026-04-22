import styles from './SceneMural.module.css';

type MonumentBlockProps = {
  className?: string;
  kind: 'spire' | 'stupa' | 'gate';
};

export function MonumentBlock({ className = '', kind }: MonumentBlockProps) {
  return (
    <div
      className={[
        styles.monumentBlock,
        styles[`monument${kind[0].toUpperCase()}${kind.slice(1)}` as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className={styles.monumentBase} />
      <span className={styles.monumentCore} />
      <span className={styles.monumentTop} />
      <span className={styles.monumentAccent} />
    </div>
  );
}
