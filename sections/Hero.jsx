'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Bringth Inovation
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-center"
          >
            <h1 className={styles.heroHeading}> Rev</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}> lution</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
        >
          <div className="absolute w-5/6 h-[400px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[0px]" />
          <img
            src="/header.jpeg"
            alt="header"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] mt-12 z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
