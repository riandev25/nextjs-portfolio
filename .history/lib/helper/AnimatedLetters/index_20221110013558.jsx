import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  const total = prev + 1;

  return (
    <span>
      {strArray.map((char, i) => {
        const num = 2;
        return (
          <span
            key={char + i}
            className={`${letterClass}`}
            style={{ animationDelay: `${num}s` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
