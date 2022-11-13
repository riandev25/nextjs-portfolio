import { useParallax } from 'react-scroll-parallax';

const About = () => {
  const { ref } = useParallax({
    translateY: [-100, 100, 'easeInOut'],
    scale: [0, 1, 'easeOutBack'],
  });

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
