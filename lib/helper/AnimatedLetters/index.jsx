import './index.module.css';

const AnimatedLetters = ({ letterClass, strArray, prev }) => {
  return (
    <span>
      {strArray.map((items) => {
        return (
          <span
            key={items.num}
            className={`${letterClass}`}
            style={{ animationDelay: `${+items.num}s` }}
          >
            {items.content}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
