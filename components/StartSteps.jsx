import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className="flex flex-row items-start">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] m-1 rounded-[24px] bg-[#323f5d]`}
    >
      <p className="font-bold text-[20px] text-white">0{number}</p>
    </div>
    <p className="flex-1 ml-[20px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
