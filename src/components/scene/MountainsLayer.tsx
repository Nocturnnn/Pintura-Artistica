import styles from './SceneMural.module.css';

type MountainsLayerProps = {
  compact?: boolean;
};

export function MountainsLayer({ compact = false }: MountainsLayerProps) {
  return (
    <div className={styles.mountains} aria-hidden="true">
      <div className={styles.ridgeBack} />
      <div className={styles.ridgeMid} />
      <div className={`${styles.ridgeFront} ${compact ? styles.ridgeCompact : ''}`} />
      <div className={styles.templeLine} />
      <div className={styles.horizonGlow} />
    </div>
  );
}
