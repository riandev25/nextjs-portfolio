import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  const total = prev + 1;

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
            style={{ animationDelay: '1s+1s' }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
