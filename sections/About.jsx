'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="Tentang Bringth Journey Innovation Revolution"
        textStyles="text-center"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">
          {' '}
          Bringth Journey Innovation Revolution (BJIR){' '}
        </span>{' '}
        adalah komunitas software engineer yang berdedikasi untuk menciptakan
        berbagai solusi teknologi inovatif. Kami berfokus pada pengembangan
        aplikasi yang mencakup beragam bidang seperti website, mobile app,
        machine learning, hingga solusi berbasis cloud. BJIR didirikan dengan
        visi untuk mendorong kemajuan teknologi di Indonesia dan menjadi katalis
        perubahan dalam dunia digital.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
