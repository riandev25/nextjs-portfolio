import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  console.log(typeof prev);
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass}`}
          style={{ animationDelay: `${+(i + prev) / 10}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
