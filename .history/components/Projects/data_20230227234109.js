import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from './../../assets/images/projects/portfolio-image.png';
import weatherImage from './../../assets/images/projects/weather-app.png';
import taskaccioImage from './../../assets/images/projects/taskaccio-board.png';

export const PROJECT_DATA = [
  {
    title: 'Task Accio',
    description:
      'Task Accio is a full-stack web application that allows users to manage their tasks in a user-friendly way. Inspired by Trello, it provides features such as creating tasks, adding labels, checklists, and images, as well as login authentication and CRUD (Create, Read, Update, Delete) operations for tasks. With Task Accio, users can easily keep track of their tasks, prioritize them using drag-and-drop, and break them down into smaller, more manageable sub-tasks using checklists.',
    tech: [
      'NextJS, Typescript, Tailwind, React Query, Zustand, ExpressJS, MongoDB',
    ],
    links: [
      {
        id: 1,
        icon: faSquareArrowUpRight,
        caption: 'external link',
        link: 'https://taskaccio.vercel.app',
      },
      {
        id: 2,
        icon: faGithubAlt,
        caption: 'source code',
        link: 'https://github.com/riandev25/project-management',
      },
    ],
    image: taskaccioImage,
  },
  {
    title: 'Task Accio Backend Server',
    description:
      "Task Accio's backend is a comprehensive web application that allows users to perform CRUD operations for their tasks, along with authentication for secure login. It facilitates the creation, modification, deletion, and retrieval of tasks and supports various features such as labels, checklists, and images.",
    tech: [
      'NodeJS, ExpressJS, Typescript, MongoDB, Passport Local, Cloudinary',
    ],
    links: [
      {
        id: 1,
        icon: faSquareArrowUpRight,
        caption: 'external link',
        link: 'https://github.com/riandev25/project-management-server',
      },
      {
        id: 2,
        icon: faGithubAlt,
        caption: 'source code',
        link: 'https://github.com/riandev25/project-management-server',
      },
    ],
    image: taskaccioImage,
  },
  {
    title: 'My Portfolio Website',
    description:
      'I have built my portfolio website to showcase my projects and also to practice responsive web design and CSS animations. Soon will be converted to TypeScript',
    tech: ['ReactJS, NextJS, Tailwind, Parallax Design, Responsive layout'],
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
    tech: ['HTML, CSS, Javascript'],
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
