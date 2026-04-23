import { motion } from 'framer-motion';
import { GrandPaintingScene } from '../scene/GrandPaintingScene';
import styles from './GrandPaintingSection.module.css';

export function GrandPaintingSection() {
  return (
    <section className={styles.section} aria-labelledby="grand-painting-title">
      <motion.div
        className={styles.copy}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className={styles.kicker}>Pintura monumental</span>
        <h2 id="grand-painting-title">Um painel final gigante, inspirado na mesma referencia</h2>
        <p>
          Esta nova composicao fecha o site como um grande poster vivo: mais alta,
          mais densa e montada com a mesma tecnica vetorial em camadas, objetos
          geometricos e microanimacoes que ja estruturam o restante da pagina.
        </p>
      </motion.div>

      <GrandPaintingScene />
    </section>
  );
}
