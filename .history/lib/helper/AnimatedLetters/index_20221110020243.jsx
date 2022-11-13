import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  return (
    <span>
      {strArray.map((char, i) => {
        let prevTotal = prev + 1;
        return (
          <span
            key={char + i}
            className={`${letterClass}`}
            style={{ animationDelay: `${+prevTotal + i}s` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
