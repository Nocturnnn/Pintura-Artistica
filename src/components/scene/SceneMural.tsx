import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './SceneMural.module.css';
import { CulturalObject } from './CulturalObject';
import { DecorativeSky } from './DecorativeSky';
import { DecorativeTree } from './DecorativeTree';
import { FloatingBirds } from './FloatingBirds';
import { LanternGroup } from './LanternGroup';
import { MonumentBlock } from './MonumentBlock';
import { MountainsLayer } from './MountainsLayer';
import { RiverLayer } from './RiverLayer';
import { TempleBlock } from './TempleBlock';

type SceneMuralProps = {
  id?: string;
  compact?: boolean;
};

export function SceneMural({ id, compact = false }: SceneMuralProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const mountainsY = useTransform(scrollYProgress, [0, 1], compact ? [18, -18] : [38, -36]);
  const skylineY = useTransform(scrollYProgress, [0, 1], compact ? [10, -10] : [22, -22]);
  const riverY = useTransform(scrollYProgress, [0, 1], compact ? [-6, 8] : [-14, 18]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], compact ? [-12, 10] : [-28, 24]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`${styles.mural} ${compact ? styles.compact : ''}`}
      aria-label="Grande mural ilustrado em camadas"
    >
      <div className={styles.backgroundWash} />
      <motion.div className={styles.skyLayer} style={{ y: skylineY }}>
        <DecorativeSky compact={compact} />
        <FloatingBirds compact={compact} />
      </motion.div>

      <motion.div className={styles.mountainsLayer} style={{ y: mountainsY }}>
        <MountainsLayer compact={compact} />
      </motion.div>

      <motion.div className={styles.midArchitecture} style={{ y: skylineY }}>
        <TempleBlock className={styles.templeLeft} tone="warm" size={compact ? 'md' : 'lg'} />
        <TempleBlock className={styles.templeCenter} tone="cool" size={compact ? 'lg' : 'xl'} />
        <TempleBlock className={styles.templeRight} tone="warm" size={compact ? 'md' : 'lg'} />
        <MonumentBlock kind="spire" />
        <MonumentBlock kind="stupa" />
        <MonumentBlock kind="gate" />
      </motion.div>

      <motion.div className={styles.riverLayer} style={{ y: riverY }}>
        <RiverLayer compact={compact} />
      </motion.div>

      <motion.div className={styles.floatingObjects} style={{ y: foregroundY }}>
        <CulturalObject kind="sun" />
        <CulturalObject kind="boat" />
        <CulturalObject kind="plate" />
        <CulturalObject kind="kite" />
        <CulturalObject kind="mask" />
        <CulturalObject kind="figure" />
        <CulturalObject kind="elephant" />
      </motion.div>

      <motion.div className={styles.greeneryLayer} style={{ y: foregroundY }}>
        <DecorativeTree className={styles.treePalmLeft} kind="palm" />
        <DecorativeTree className={styles.treePalmRight} kind="palm" />
        <DecorativeTree className={styles.treeTallLeft} kind="tall" />
        <DecorativeTree className={styles.treeTallRight} kind="tall" />
        <DecorativeTree className={styles.treeRoundCenter} kind="round" />
        <DecorativeTree className={styles.treeRoundLow} kind="round" />
      </motion.div>

      <div className={styles.lanternZone}>
        <LanternGroup compact={compact} />
      </div>

      <div className={styles.frameBorder} />
      <div className={styles.bottomPattern} />
    </section>
  );
}
