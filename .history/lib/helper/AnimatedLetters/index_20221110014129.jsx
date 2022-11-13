import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span
            key={char + i}
            className={`${letterClass}`}
            style={{ animationDelay: `${+prev}s` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
