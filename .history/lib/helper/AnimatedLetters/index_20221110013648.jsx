import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  const total = prev + 1;

  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span
            key={char + i}
            className={`${letterClass}`}
            style={{ animationDelay: `${i}s` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
