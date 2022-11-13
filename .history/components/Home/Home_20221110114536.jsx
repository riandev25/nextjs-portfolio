// import Link from 'next/link';
// import Image from 'next/future/image';
// import { useState, useEffect } from 'react';
// import DevImage from '../../assets/images/dev-image.svg';
// import GithubImage from '../../assets/images/github-neon-fill.png';
// import LinkedinImage from '../../assets/images/linkedin-neon-fill.png';
// import FacebookImage from '../../assets/images/facebook-neon-fill.png';
// import Keyboard from './Keyboard';
// import AnimatedLetters from '../../lib/helper/AnimatedLetters';

// export const images = [
//   {
//     id: 'github',
//     imgSrc: GithubImage,
//     link: 'https://github.com/riandev25',
//   },
//   {
//     id: 'linkedin',
//     imgSrc: LinkedinImage,
//     link: 'https://www.linkedin.com/in/rian-miguel-engracia/',
//   },
//   {
//     id: 'facebook',
//     imgSrc: FacebookImage,
//     link: 'https://web.facebook.com/rianmiguel.engracia',
//   },
//   {
//     id: 'email',
//     email: 'rianengracia@gmail.com',
//   },
// ];

// const greetArray = [
//   {
//     num: 1,
//     content: 'H'
//   },
//   {
//     num: 2,
//     content: 'i'
//   },
//   {
//     num: 3,
//     content: ' '
//   },
//   {
//     num: 4,
//     content: 't'
//   },
//   {
//     num: 5,
//     content: 'h'
//   },
//   {
//     num: 6,
//     content: 'e'
//   },
//   {
//     num: 7,
//     content: 'r'
//   },
//   {
//     num: 8,
//     content: 'e'
//   },
//   {
//     num: 9,
//     content: '!'
//   },
// ]

// const nameArray = [
//   {
//     num: '10',
//     content: 'I'
//   },
//   {
//     num: '11',
//     content: "'"
//   },
//   {
//     num: '12',
//     content: 'm'
//   },
//   {
//     num: '13',
//     content: ' '
//   },
//   {
//     num: '14',
//     content: 'R'
//   },
//   {
//     num: '15',
//     content: 'i'
//   },
//   {
//     num: '16',
//     content: 'a'
//   },
//   {
//     num: '17',
//     content: 'n'
//   },
//   {
//     num: '18',
//     content: ' '
//   },
//   {
//     num: '19',
//     content: 'M'
//   },
//   {
//     num: '20',
//     content: 'i'
//   },
//   {
//     num: '21',
//     content: 'g'
//   },
//   {
//     num: '22',
//     content: 'u'
//   },
//   {
//     num: '23',
//     content: 'e'
//   },
//   {
//     num: '24',
//     content: 'l'
//   },
// ]
// const jobArray = [
//   {
//     num: 25,
//     content: 'a'
//   },
//   {
//     num: 26,
//     content: ' '
//   },
//   {
//     num: 27,
//     content: 'f'
//   },
//   {
//     num: 28,
//     content: 'u'
//   },
//   {
//     num: 29,
//     content: 'l'
//   },
//   {
//     num: 30,
//     content: 'l'
//   },
//   {
//     num: 31,
//     content: ' '
//   },
//   {
//     num: 32,
//     content: 's'
//   },
//   {
//     num: 33,
//     content: 't'
//   },
//   {
//     num: 34,
//     content: 'a'
//   },
//   {
//     num: 35,
//     content: 'c'
//   },
//   {
//     num: 36,
//     content: 'k'
//   },
//   {
//     num: 37,
//     content: ' '
//   },
//   {
//     num: 38,
//     content: 'd'
//   },
//   {
//     num: 39,
//     content: 'e'
//   },
//   {
//     num: 40,
//     content: 'v'
//   },
//   {
//     num: 41,
//     content: 'e'
//   },
//   {
//     num: 42,
//     content: 'l'
//   },
//   {
//     num: 43,
//     content: 'o'
//   },
//   {
//     num: 44,
//     content: 'p'
//   },
//   {
//     num: 45,
//     content: 'e'
//   },
//   {
//     num: 46,
//     content: 'r'
//   },
// ]

// const Home = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 4000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <header className='flex justify-center items-center w-full h-screen px-20 bg-repeat bg-bg_home_image'>
//       <section className='w-4/12 space-y-4'>
//         <div className='flex flex-col gap-2.5'>
//           <h2 className={`text-xl font-thin text-white ${letterClass}`}>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={greetArray}
//               prev={1}
//             />
//           </h2>
//           <h1 className='text-6xl text-white font-bold'>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={nameArray}
//               prev={greetArray.length}
//             />
//           </h1>
//           <h1 className='text-xl text-white font-bold'>
//             {/* <span className='text-xl font-thin'>a</span> Full Stack Developer */}
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={jobArray}
//               prev={greetArray.length + nameArray.length}
//             />
//           </h1>
//         </div>
//         <ul className='flex flex-row gap-4'>
//           {images.map((item) => {
//             if (item.id === 'email') return;
//             return (
//               <li
//                 className='block p-3 bg-gray-800 border rounded-lg border-[#b2fcfb] transition-all hover:scale-110'
//                 key={item.id}
//               >
//                 <Link href={item.link} legacyBehavior>
//                   <a className=''>
//                     <Image
//                       className=''
//                       src={item.imgSrc}
//                       alt={item.id}
//                       width={20}
//                       height={20}
//                       sizes='5vw'
//                     />
//                   </a>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </section>
//       <section className='flex max-w-2xl h-full justify-center items-center'>
//         {/* <Image
//           src={DevImage}
//           alt='dev-image'
//           width={500}
//           height={500}
//           sizes='(max-width: 768px) 50vw'
//         /> */}
//         <Keyboard />
//       </section>
//     </header>
//   );
// };

// export default Home;

import Link from 'next/link';
import Image from 'next/future/image';
import styles from './index.module.css';
import DevImage from '../../assets/images/dev-image.svg';
import GithubImage from '../../assets/images/github-neon-fill.png';
import LinkedinImage from '../../assets/images/linkedin-neon-fill.png';
import FacebookImage from '../../assets/images/facebook-neon-fill.png';
import Keyboard from './Keyboard';

export const images = [
  {
    id: 'github',
    imgSrc: GithubImage,
    link: 'https://github.com/riandev25',
  },
  {
    id: 'linkedin',
    imgSrc: LinkedinImage,
    link: 'https://www.linkedin.com/in/rian-miguel-engracia/',
  },
  {
    id: 'facebook',
    imgSrc: FacebookImage,
    link: 'https://web.facebook.com/rianmiguel.engracia',
  },
  {
    id: 'email',
    email: 'rianengracia@gmail.com',
  },
];

const nameArray = ['I', '&apos;', 'm', ' ', 'R', 'i', 'a', 'n'];
const jobArray = [
  'f',
  'u',
  'l',
  'l',
  ' ',
  's',
  't',
  'a',
  'c',
  'k',
  ' ',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
];

const Home = () => {
  return (
    <header className='flex justify-center items-center w-full h-screen px-20 bg-repeat bg-bg_home_image'>
      <section className='w-4/12 space-y-4'>
        <div className='flex flex-col gap-2.5 place-items-start'>
          <h1
            className={`text-xl font-thin text-white ${styles.typingLet`}
          >
            Hi there!
          </h1>
          <h1 className='text-6xl text-white font-bold'>
            I&apos;m Rian Miguel
          </h1>
          <h1 className='text-xl text-white font-bold'>
            <span className='text-xl font-thin'>a</span> Full Stack Developer
          </h1>
        </div>
        <ul className='flex flex-row gap-4'>
          {images.map((item) => {
            if (item.id === 'email') return;
            return (
              <li
                className='block p-3 bg-gray-800 border rounded-lg border-[#b2fcfb] transition-all hover:scale-110'
                key={item.id}
              >
                <Link href={item.link} legacyBehavior>
                  <a className=''>
                    <Image
                      className=''
                      src={item.imgSrc}
                      alt={item.id}
                      width={20}
                      height={20}
                      sizes='5vw'
                    />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='flex max-w-2xl h-full justify-center items-center'>
        {/* <Image
          src={DevImage}
          alt='dev-image'
          width={500}
          height={500}
          sizes='(max-width: 768px) 50vw'
        /> */}
        <Keyboard />
      </section>
    </header>
  );
};

export default Home;
