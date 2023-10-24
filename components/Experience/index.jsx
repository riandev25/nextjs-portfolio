import React from 'react';
import PageHeader from '../PageHeader';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
  // const { animate, animationHandler } = useScrollAnimate();
  return (
    <section
      id='About'
      className='relative w-full min-h-screen flex flex-col gap-11 justify-center items-center text-white px-8 pb-12 sm:px-12 lg:px-24 bg-bg_chip_image bg-fixed'
    >
      <PageHeader title='Experience' />
      <div
        className={`flex flex-row justify-start items-start max-w-4xl gap-6  md:items-start`}
      >
        <span className='p-4 border-[#b2fcfb] border'>
          <p>Future Analytics Ltd</p>
        </span>
        <div className='flex flex-col gap-3 pt-3'>
          <p className='text-2xl'>Full Stack Developer</p>
          <div className='text-lg flex flex-col gap-2'>
            <span className='flex flex-row items-start gap-4'>
              <FontAwesomeIcon
                icon={faCaretRight}
                className='w-4 pt-2'
                color='#b2fcfb'
              />
              <p>
                {`Managed company website development, user experience, and technical support for our organization's digital presence and efficiency.
`}
              </p>
            </span>
            <span className='flex flex-row items-start gap-4'>
              <FontAwesomeIcon
                icon={faCaretRight}
                className='w-4 pt-2'
                color='#b2fcfb'
              />
              <p>
                {`Developed web applications with a primary focus on embedding Power BI, enabling robust data visualization and analysis for our users`}
              </p>
            </span>
            <span className='flex flex-row items-start gap-4'>
              <FontAwesomeIcon
                icon={faCaretRight}
                className='w-4 pt-2'
                color='#b2fcfb'
              />
              <p>
                {`Designed, developed, and implemented a variety of in-house tools, streamlining internal processes, enhancing efficiency, and supporting our team's needs.`}
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
