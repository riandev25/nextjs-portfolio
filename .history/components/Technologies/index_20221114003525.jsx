import Image from 'next/future/image';
import PageHeader from '../PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import TailwindImage from '../../assets/images/tech/tailwind.svg';
import NextjsImage from '../../assets/images/tech/nextjs.svg';
import MongodbImage from '../../assets/images/tech/mongodb.svg';
import VScodeImage from '../../assets/images/tech/vscode.svg';
import ExpressjsImage from '../../assets/images/tech/expressjs.svg';
import TypescriptImage from '../../assets/images/tech/typescript.svg';

import TechStack from './TechStack';

const techArray = () => {
  const FRONTEND = [
    {
      id: 'HTML5',
      icon: faHtml5,
    },
    {
      id: 'CSS3',
      icon: faCss3,
    },
    {
      id: 'JavaScript',
      icon: faJsSquare,
    },
    {
      id: 'ReactJS',
      icon: faReact,
    },
    {
      id: 'Tailwind',
      icon: TailwindImage,
    },
    {
      id: 'NextJS',
      icon: NextjsImage,
    },
  ];
  const BACKEND = [
    { id: 'NodeJS', icon: faNodeJs },
    { id: 'MongoDB', icon: MongodbImage },
  ];
  const TOOLS = [
    { id: 'Git', icon: faGitSquare },
    { id: 'Github', icon: faGithub },
    { id: 'VSCode', icon: VScodeImage },
  ];
  const SOON = [
    { id: 'ExpressJS', icon: ExpressjsImage },
    { id: 'TypeScript', icon: TypescriptImage },
  ];
  return { FRONTEND, BACKEND, TOOLS, SOON };
};

const Technologies = () => {
  const { FRONTEND, BACKEND, TOOLS, SOON } = techArray();
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-bg_qr_image bg-fixed gap-11 pt-4 px-20 text-white  '>
      <PageHeader title='Technologies' />
      <div className='flex flex-row max-w-4xl'>
        <section className='max-w-sm flex flex-col w-96'>
          <h2 className='z-50 px-3 text-lg'>Front-end</h2>
          <span className='w-full h-0.5 bg-white'></span>
        </section>
        <section className='z-40 group relative flex flex-col bg-white shadow-lg border-2 border-[#b2fcfb] w-full p-7 gap-8 rounded-lg image-filter'>
          {/* <ul className='grid grid-cols-3 gap-3'>
            {FRONTEND.map((item) => {
              return (
                <li
                  key={item.id}
                  className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
                >
                  <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className='w-6 text-white'
                    />
                    {(item.id === 'Tailwind' || item.id === 'NextJS') && (
                      <Image
                        src={item.icon}
                        alt={item.icon}
                        width={item.id === 'Tailwind' ? 34 : 24}
                        height={item.id === 'Tailwind' ? 34 : 24}
                        sizes='5wv'
                        className='text-white'
                      />
                    )}
                  </div>

                  <div className='py-3 pl-2'>
                    <span className='col-span-2 text-base text-white my-2 '>
                      {item.id}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul> */}
          <TechStack array={FRONTEND} />
          <TechStack array={BACKEND} />
          <TechStack array={TOOLS} />
          <TechStack array={SOON} />
          {/* <ul className='grid grid-cols-3 gap-3'>
            {BACKEND.map((item) => {
              return (
                <li
                  key={item.id}
                  className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
                >
                  <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className='w-6 text-white'
                    />
                    {item.id === 'MongoDB' && (
                      <Image
                        src={item.icon}
                        alt={item.icon}
                        width={24}
                        height={24}
                        sizes='5wv'
                        className='text-white'
                      />
                    )}
                  </div>

                  <div className='py-3 pl-2'>
                    <span className='col-span-2 text-base text-white my-2 '>
                      {item.id}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className='grid grid-cols-3 gap-3'>
            {TOOLS.map((item) => {
              return (
                <li
                  key={item.id}
                  className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
                >
                  <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className='w-6 text-white'
                    />
                    {item.id === 'VSCode' && (
                      <Image
                        src={item.icon}
                        alt={item.icon}
                        width={24}
                        height={24}
                        sizes='5wv'
                        className='text-white'
                      />
                    )}
                  </div>

                  <div className='py-3 pl-2'>
                    <span className='col-span-2 text-base text-white my-2 '>
                      {item.id}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className='grid grid-cols-3 gap-3'>
            {SOON.map((item) => {
              return (
                <li
                  key={item.id}
                  className='grid grid-cols-3 border-2 rounded-lg bg-gray-500 shadow-lg'
                >
                  <div className='flex justify-center items-center rounded-l-lg bg-gray-600'>
                    <Image
                      src={item.icon}
                      alt={item.icon}
                      width={24}
                      height={24}
                      sizes='5wv'
                      className='text-white'
                    />
                  </div>

                  <div className='py-3 pl-2'>
                    <span className='col-span-2 text-base text-white my-2 '>
                      {item.id}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul> */}
        </section>
      </div>
    </div>
  );
};

export default Technologies;
