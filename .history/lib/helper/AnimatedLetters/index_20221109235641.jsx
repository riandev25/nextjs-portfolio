import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  console.log(prev);
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass}`}
          style={{ animationDelay: `${((i + prev) * 0.1).toFixed(2)}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
