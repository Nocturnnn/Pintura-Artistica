import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { SceneMural } from '../scene/SceneMural';

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
  },
};

export function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackdrop} />
      <div className={styles.heroInner}>
        <motion.div
          className={styles.copy}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className={styles.kicker}>Pintura editorial em interface viva</span>
          <h1>Uma viagem visual por formas, cultura e cor</h1>
          <p>
            Uma experiência digital inspirada em composições editoriais ilustradas,
            transformada em interface interativa.
          </p>
          <div className={styles.actions}>
            <motion.a
              href="#mural"
              className={styles.primaryAction}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Explorar composição
            </motion.a>
            <motion.a
              href="#detalhes"
              className={styles.secondaryAction}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
            >
              Ver detalhes
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className={styles.heroScene}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: smoothEase }}
        >
          <SceneMural id="mural" />
        </motion.div>
      </div>
    </header>
  );
}
