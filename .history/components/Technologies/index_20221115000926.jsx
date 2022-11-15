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
    <div
      id='technologies'
      className='flex flex-col justify-center items-center w-full min-h-screen bg-bg_qr_image bg-fixed gap-11 py-20 px-6 text-white sm:px-12 lg:px-24 '
    >
      <PageHeader title='Technologies' />
      <div className='flex flex-row justify-center items-center max-w-4xl'>
        <section className='hidden md:flex flex-col w-[28%]'>
          <h2 className='z-50 px-3 text-lg'>Front-end</h2>
          <span className='h-0.5 bg-white'></span>
        </section>
        <section className='z-40 group relative flex flex-col bg-white shadow-lg border-2 border-[#b2fcfb] w-full md:w-8/12 p-7 gap-8 rounded-lg image-filter'>
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
