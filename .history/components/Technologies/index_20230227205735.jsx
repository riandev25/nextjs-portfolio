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
import ReduxImage from '../../assets/images/tech/redux.svg';
import ReactQueryImage from '../../assets/images/tech/react-query.svg';
import PostmanImage from '../../assets/images/tech/postman.svg';
import AwsImage from '../../assets/images/tech/aws.svg';
import RemixImage from '../../assets/images/tech/remix.svg';

import TechStack from './TechStack';
import { Parallax } from 'react-scroll-parallax';
import { useScrollAnimate } from '../../lib/hooks/useScrollAnimate';

const techArray = () => {
  const PROGRAMMING_LANGUAGE = [
    {
      id: 'JavaScript',
      icon: faJsSquare,
    },
    { id: 'TypeScript', icon: TypescriptImage },
  ];

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
      id: 'Redux',
      icon: ReduxImage,
    },
    {
      id: 'Zustand',
      icon: ReduxImage,
    },
    {
      id: 'ReactJS',
      icon: faReact,
    },
    {
      id: 'ReactQuery',
      icon: ReactQueryImage,
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
    { id: 'ExpressJS', icon: ExpressjsImage },
    { id: 'MongoDB', icon: MongodbImage },
  ];
  const TOOLS = [
    { id: 'Git', icon: faGitSquare },
    { id: 'Github', icon: faGithub },
    { id: 'VSCode', icon: VScodeImage },
    { id: 'Postman', icon: PostmanImage },
  ];
  const SOON = [
    { id: 'AWS', icon: AwsImage },
    { id: 'Remix', icon: RemixImage },
    { id: 'R.Native', icon: faReact },
  ];
  return { PROGRAMMING_LANGUAGE, FRONTEND, BACKEND, TOOLS, SOON };
};

const TECH_LISTS = [];

const Technologies = () => {
  const { PROGRAMMING_LANGUAGE, FRONTEND, BACKEND, TOOLS, SOON } = techArray();
  const { animate, animationHandler } = useScrollAnimate();

  return (
    <div
      id='Technologies'
      className={`flex flex-col justify-center items-center w-full min-h-screen bg-bg_qr_image bg-fixed shadow-md shadow-[#b2fcfb] gap-11 py-24 px-6 text-white sm:px-12 lg:px-24 `}
    >
      <PageHeader title='Technologies' />
      <div
        className={`relative ${
          animate ? 'animate-scroll_left delay-200 visible' : 'invisible'
        } flex flex-row justify-center max-w-5xl`}
      >
        {/* <div className='hidden md:flex md:w-[28%] md:sticky md:top-0'>
          <div className='flex flex-col'>
            <h2 className='z-50 px-3 text-lg'>Frontend</h2>
            <span className='h-0.5 bg-white'></span>
          </div>
        </div> */}
        {/* <section className='hidden sticky top-0 md:flex flex-col w-[28%]'>
          <h2 className='z-50 px-3 text-lg'>Frontend</h2>
          <span className='h-0.5 bg-white'></span>
        </section> */}
        <section className='z-40 group relative flex flex-col bg-white shadow-lg border-2 border-[#b2fcfb] w-full md:w-8/12 p-7 gap-8 rounded-lg image-filter'>
          <Parallax onEnter={animationHandler}>
            <TechStack
              tech={PROGRAMMING_LANGUAGE}
              title='Programming Languages'
            />
          </Parallax>
          <TechStack tech={FRONTEND} title='Frontend' />
          <TechStack tech={BACKEND} title='Backend' />
          <TechStack tech={TOOLS} title='Other Tools' />
          <TechStack tech={SOON} title='Coming Soon' />
        </section>
      </div>
    </div>
  );
};

export default Technologies;
