import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const { ref } = useParallax({
    rotate: [0, 360, 180],
  });

  return (
    <div className='w-full h-screen flex justify-center items-center px-20 bg-gray-700'>
      <section>
        <div ref={ref}>ABOUT</div>
      </section>
    </div>
  );
};

export default About;
