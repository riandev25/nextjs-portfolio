import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const { ref } =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };

  return (
    <div className='w-full h-screen flex justify-center items-center px-20 '>
      <section>
        <div ref={ref}>About me</div>
        <div></div>
      </section>
    </div>
  );
};

export default About;
