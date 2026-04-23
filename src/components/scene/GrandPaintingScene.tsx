import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './GrandPaintingScene.module.css';
import { CulturalObject } from './CulturalObject';
import { DecorativeSky } from './DecorativeSky';
import { DecorativeTree } from './DecorativeTree';
import { FloatingBirds } from './FloatingBirds';
import { LanternGroup } from './LanternGroup';
import { MonumentBlock } from './MonumentBlock';
import { MountainsLayer } from './MountainsLayer';
import { RiverLayer } from './RiverLayer';
import { TempleBlock } from './TempleBlock';

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function GrandPaintingScene() {
  const sceneRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end start'],
  });

  const skyY = useTransform(scrollYProgress, [0, 1], [54, -48]);
  const topY = useTransform(scrollYProgress, [0, 1], [38, -30]);
  const middleY = useTransform(scrollYProgress, [0, 1], [26, -24]);
  const sacredY = useTransform(scrollYProgress, [0, 1], [30, -24]);
  const marketY = useTransform(scrollYProgress, [0, 1], [-18, 24]);

  return (
    <section
      ref={sceneRef}
      className={styles.scene}
      aria-label="Pintura monumental inspirada em posteres culturais do sudeste asiatico"
    >
      <div className={styles.baseGlow} />
      <div className={styles.paperTexture} />
      <div className={styles.bandTop} />
      <div className={styles.bandMiddle} />
      <div className={styles.bandSacred} />
      <div className={styles.bandBottom} />
      <div className={styles.middleHalo} />
      <div className={styles.bottomWater} />
      <div className={styles.frameBorder} />
      <div className={styles.bottomStripe} />

      <motion.div className={styles.topScene} style={{ y: skyY }}>
        <div className={styles.topSky}>
          <DecorativeSky />
          <FloatingBirds />
        </div>
        <div className={styles.topMountains}>
          <MountainsLayer />
        </div>
        <div className={styles.topRiver}>
          <RiverLayer compact />
        </div>
      </motion.div>

      <motion.div className={styles.topArchitecture} style={{ y: topY }}>
        <CulturalObject
          kind="boat"
          style={{ top: '18%', left: '2.5%', width: '23%', zIndex: 4 }}
        />
        <TempleBlock
          tone="cool"
          size="lg"
          style={{ left: '54%', top: '7%', width: '12.5%', zIndex: 5 }}
        />
        <TempleBlock
          tone="cool"
          size="lg"
          style={{ left: '68%', top: '8%', width: '12.5%', zIndex: 5 }}
        />
        <TempleBlock
          tone="cool"
          size="lg"
          style={{ left: '82%', top: '8.5%', width: '12.5%', zIndex: 5 }}
        />
        <DecorativeTree
          kind="palm"
          style={{ left: '59%', top: '17%', width: '10%', aspectRatio: '0.85', zIndex: 4 }}
        />
        <DecorativeTree
          kind="palm"
          style={{ left: '73%', top: '19%', width: '9%', aspectRatio: '0.85', zIndex: 4 }}
        />
      </motion.div>

      <motion.div className={styles.middleScene} style={{ y: middleY }}>
        <TempleBlock
          tone="warm"
          size="xl"
          style={{ left: '8%', bottom: '4%', width: '24%', zIndex: 4 }}
        />
        <div className={styles.fruitBasket} aria-hidden="true" />
        <CulturalObject
          kind="plate"
          style={{ top: '10%', left: '38%', width: '16%', zIndex: 5 }}
        />
        <CulturalObject
          kind="kite"
          style={{ top: '9%', right: '29%', width: '14%', zIndex: 5 }}
        />
        <CulturalObject
          kind="elephant"
          style={{ top: '7%', right: '4%', width: '21%', zIndex: 5 }}
        />
        <motion.div
          className={styles.orchidDisc}
          animate={{ rotate: [0, 3, 0, -3, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
        <DecorativeTree
          kind="round"
          style={{ left: '24%', bottom: '8%', width: '18%', aspectRatio: '0.9', zIndex: 3 }}
        />
        <CulturalObject
          kind="figure"
          style={{ bottom: '6%', left: '50%', width: '9%', zIndex: 5 }}
        />
        <DecorativeTree
          kind="tall"
          style={{ left: '63%', bottom: '12%', width: '7.5%', aspectRatio: '0.56', zIndex: 3 }}
        />
        <DecorativeTree
          kind="tall"
          style={{ left: '69%', bottom: '8%', width: '8%', aspectRatio: '0.56', zIndex: 3 }}
        />
      </motion.div>

      <motion.div className={styles.sacredScene} style={{ y: sacredY }}>
        <MonumentBlock
          kind="spire"
          style={{ left: '-2%', right: 'auto', bottom: '8%', width: '10%', zIndex: 4 }}
        />
        <MonumentBlock
          kind="stupa"
          style={{ left: '8%', right: 'auto', bottom: '4%', width: '11%', zIndex: 4 }}
        />
        <MonumentBlock
          kind="spire"
          style={{ left: '18%', right: 'auto', bottom: '9%', width: '10%', zIndex: 4 }}
        />
        <MonumentBlock
          kind="stupa"
          style={{ left: '29%', right: 'auto', bottom: '6%', width: '11%', zIndex: 4 }}
        />
        <MonumentBlock
          kind="spire"
          style={{ left: '40%', right: 'auto', bottom: '7%', width: '10%', zIndex: 4 }}
        />

        <div className={styles.buddha} aria-hidden="true">
          <span className={styles.buddhaAura} />
          <span className={styles.buddhaHair} />
          <span className={styles.buddhaHead} />
          <span className={styles.buddhaTorso} />
          <span className={styles.buddhaArmLeft} />
          <span className={styles.buddhaArmRight} />
          <span className={styles.buddhaBase} />
        </div>

        <DecorativeTree
          kind="tall"
          style={{ left: '56%', bottom: '30%', width: '7%', aspectRatio: '0.56', zIndex: 5 }}
        />
        <DecorativeTree
          kind="tall"
          style={{ left: '62%', bottom: '28%', width: '7%', aspectRatio: '0.56', zIndex: 5 }}
        />
        <MonumentBlock
          kind="gate"
          style={{ left: '75%', bottom: '2%', width: '23%', zIndex: 5 }}
        />
        <TempleBlock
          tone="warm"
          size="md"
          style={{ left: '88%', bottom: '-1%', width: '12%', zIndex: 6 }}
        />
        <LanternGroup
          compact
          style={{ inset: 'auto', top: '10%', right: '0.5%', width: '34%', height: '52%' }}
        />
        <CulturalObject kind="mask" style={{ right: '2%', bottom: '1%', width: '12%', zIndex: 6 }} />
      </motion.div>

      <motion.div className={styles.marketScene} style={{ y: marketY }}>
        <MonumentBlock
          kind="gate"
          style={{ left: '13%', bottom: '36%', width: '18%', transform: 'none', zIndex: 5 }}
        />

        <motion.div
          className={styles.dancer}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span className={styles.dancerHead} />
          <span className={styles.dancerBody} />
          <span className={styles.dancerCape} />
        </motion.div>

        <motion.div
          className={styles.flag}
          animate={{ rotate: [0, 2, 0, -1.5, 0] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />

        <div className={styles.tukTuk} aria-hidden="true">
          <span className={styles.tukTukRoof} />
          <span className={styles.tukTukCabin} />
          <span className={styles.tukTukWheelLeft} />
          <span className={styles.tukTukWheelRight} />
        </div>

        <div className={styles.marketHall} aria-hidden="true">
          <span className={styles.marketRoof} />
          <span className={styles.marketBody} />
          <span className={styles.marketAwning} />
        </div>

        <motion.div
          className={`${styles.canalBoat} ${styles.canalBoatA}`}
          animate={{ y: [0, -6, 0], rotate: [0, -1, 0, 1, 0] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <span className={styles.boater} />
          <span className={styles.umbrella} />
        </motion.div>

        <motion.div
          className={`${styles.canalBoat} ${styles.canalBoatB}`}
          animate={{ y: [0, -5, 0], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          aria-hidden="true"
        >
          <span className={styles.boater} />
          <span className={styles.umbrella} />
        </motion.div>

        <motion.div
          className={`${styles.canalBoat} ${styles.canalBoatC}`}
          animate={{ y: [0, -4, 0], rotate: [0, -0.8, 0, 0.8, 0] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          aria-hidden="true"
        >
          <span className={styles.boater} />
          <span className={styles.umbrella} />
        </motion.div>

        <div className={styles.turtle} aria-hidden="true">
          <span className={styles.turtleShell} />
          <span className={styles.turtleHead} />
        </div>

        <div className={styles.lotusCluster} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>

      <motion.div
        className={styles.cornerSun}
        animate={{ scale: [1, 1.03, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: smoothEase }}
        aria-hidden="true"
      />
    </section>
  );
}
