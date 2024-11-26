'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >
        <motion.div
          variants={fadeIn('right', 'tweeen', 0.2, 1)}
          className="flex-[0.4] flex justify-end lg:justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              Aditya Bayu
            </h4>
            <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
              Founder of BJIR
            </p>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            “BJIR lahir dari visi untuk mendorong inovasi teknologi di
            Indonesia. Kami percaya bahwa melalui solusi digital, seperti
            aplikasi web, mobile, machine learning, dan cloud, kami dapat
            menjadi katalis perubahan yang membawa manfaat luas bagi
            masyarakat.”
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
