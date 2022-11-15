const ProjectsMd = ({ subtitle, title, tech }) => {
  return (
    <section className='flex flex-col gap-5'>
      <header>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </header>
      <div>
        <p>{description}</p>
      </div>
      <footer>
        <ul className='flex flex-row justify-end items-center gap-4' dir='ltr'>
          {TECH_WEATHER.map((item) => {
            return (
              <li key={item} className='font-light'>
                {item}
              </li>
            );
          })}
        </ul>
        <ul className='flex flex-row justify-end items-center gap-4' dir='ltr'>
          {TECH_WEATHER.map((item) => {
            return (
              <li key={item} className='font-light'>
                {item}
              </li>
            );
          })}
        </ul>
      </footer>
    </section>
  );
};

export default ProjectsMd;
