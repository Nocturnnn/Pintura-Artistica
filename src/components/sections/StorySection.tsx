import { motion } from 'framer-motion';
import styles from './StorySection.module.css';
import { SceneMural } from '../scene/SceneMural';

export function StorySection() {
  return (
    <section className={styles.section} aria-labelledby="story-title">
      <div className={styles.storyboard}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.eyebrow}>Narrativa editorial</span>
          <h2 id="story-title">Uma interface construída como mural vivo</h2>
          <p>
            A página nasce da lógica do pôster ilustrado: cada faixa assume uma função
            visual e narrativa, alternando ritmo, repouso e surpresa. Em vez de um fundo
            estático, a experiência é composta por arquitetura, água, personagens e
            ornamentos que se deslocam como uma paisagem encenada.
          </p>
          <p>
            A direção de arte combina geometrias ornamentais, cor vibrante e microanimações
            delicadas para que o site pareça uma obra vetorial respirando no tempo do
            scroll. Tudo foi desenhado para manter densidade visual sem cair no ruído.
          </p>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <SceneMural compact />
        </motion.div>
      </div>
    </section>
  );
}
