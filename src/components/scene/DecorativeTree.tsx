import styles from './SceneMural.module.css';

type DecorativeTreeProps = {
  className?: string;
  kind: 'palm' | 'round' | 'tall';
};

export function DecorativeTree({ className = '', kind }: DecorativeTreeProps) {
  return (
    <div
      className={[
        styles.tree,
        styles[`tree${kind[0].toUpperCase()}${kind.slice(1)}` as keyof typeof styles],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className={styles.treeTrunk} />
      <span className={styles.treeCanopy} />
      <span className={styles.treeCanopyAlt} />
      <span className={styles.treeCanopyThird} />
    </div>
  );
}
