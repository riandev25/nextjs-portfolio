import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from './../../assets/images/projects/portfolio-image.png';
import weatherImage from './../../assets/images/projects/weather-app.png';
import taskaccioImage from './../../assets/images/projects/taskaccio-board.png';

export const PROJECT_DATA = [
  {
    title: 'My Portfolio Website',
    description:
      'I have built my portfolio website to showcase my projects and also to practice responsive web design and CSS animations. Soon will be converted to TypeScript',
    tech: [
      'ReactJS',
      'NextJS',
      'Tailwind',
      'Parallax Design',
      'Responsive layout',
    ],
    links: [
      {
        id: 1,
        icon: faSquareArrowUpRight,
        caption: 'external link',
        link: 'https://rianmiguelengracia.vercel.app/',
      },
      {
        id: 2,
        icon: faGithubAlt,
        caption: 'source code',
        link: 'https://github.com/riandev25/nextjs-portfolio',
      },
    ],
    image: portfolioImage,
  },
  {
    title: 'Weather Application',
    description:
      'A fully responsive weather application. I built this project using OpenweathermapApi and to enhance my vanilla javascript skills. Open first the location of your device for better user experience',
    tech: ['HTML', 'CSS', 'Javascript'],
    links: [
      {
        id: 1,
        icon: faSquareArrowUpRight,
        caption: 'external link',
        link: 'https://riandev25.github.io/js-weather-app/dist/?#',
      },
      {
        id: 2,
        icon: faGithubAlt,
        caption: 'source code',
        link: 'https://github.com/riandev25/js-weather-app',
      },
    ],
    image: weatherImage,
  },
];
