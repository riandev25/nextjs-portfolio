import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  // console.log(prev);

  return (
    <span>
      {strArray.map((char, i) => {
        console.log(10 / 10);
        return (
          <span
            key={char + i}
            className={`${letterClass}`}
            style={{ animationDelay: `${(i + prev) * 0.1}s` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
