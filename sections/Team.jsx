'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import { teamsData } from '../constants';

const Team = () => {
  const [activeState, setActiveState] = useState({
    team1: 'team-2',
    team2: 'team-9',
  });

  const handleClick = (key, value) => {
    setActiveState((prevState) => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  return (
    <section className={`${styles.paddings}`} id="Team">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="Team Bringth Journey Innovation Revolution"
          textStyles="text-center"
        />
        <TitleText title="Tim Kami" textStyles="text-center" />
        {teamsData?.map((teams, idx) => {
          return (
            <div
              key={idx}
              className="mt-[50px] flex lg:flex-row flex-col gap-5"
            >
              {teams.map((team, index) => {
                return (
                  <ExploreCard
                    key={team.id}
                    {...team}
                    index={index}
                    active={activeState[`team${idx + 1}`]}
                    handleClick={(value) => {
                      handleClick(`team${idx + 1}`, value);
                    }}
                    description={team.role}
                  />
                );
              })}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Team;
