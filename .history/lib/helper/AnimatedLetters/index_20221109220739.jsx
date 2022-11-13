import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  // for (let i = 1;  ) {
  //   .text-animate._#{i} {
  //     animation-delay: #{calc(i / 10)}s;
  //   }
  // }

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass}`}
          style={{ animationDelay: `${(i + idx) * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
