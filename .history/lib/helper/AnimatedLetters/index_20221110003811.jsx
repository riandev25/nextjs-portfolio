import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  console.log(1 / 10);

  return (
    <span>
      {strArray.map((char, i) => {
        {
          /* console.log(i + prev); */
        }
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
