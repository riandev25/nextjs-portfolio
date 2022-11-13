import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };

  return (
    <div className='w-full h-screen flex justify-center items-center px-20 '>
      <section>
        <h1 ref={parallax.ref}>About me</h1>
        <div></div>
      </section>
    </div>
  );
};

export default About;
