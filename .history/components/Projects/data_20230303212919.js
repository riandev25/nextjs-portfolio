import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import portfolioImage from './../../assets/images/projects/portfolio-image.png';
import weatherImage from './../../assets/images/projects/weather-app.png';
import taskaccioImage from './../../assets/images/projects/taskaccio-board.png';

export const PROJECT_DATA = [
  {
    title: 'Task Accio',
    description:
      'Task Accio is a full-stack web application that allows users to manage their tasks in a user-friendly way. Inspired by Trello, it provides features such as creating boards, lists, adding labels, checklists, description and images, as well as login authentication and CRUD (Create, Read, Update, Delete) operations. It uses a login system to allow users to create their own accounts, and JWT authentication to ensure that user data is secure and accessible only to authorized users. With Task Accio, users can easily keep track of their tasks, prioritize them using drag-and-drop, and break them down into smaller, more manageable sub-tasks. Furthermore, it also integrates a rich text editor for creating and formatting task descriptions.',
    tech: [
      'NextJS, Typescript, Tailwind, React Query, Zustand, ExpressJS, MongoDB, JWT Authentication',
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
      'NodeJS, ExpressJS, Typescript, MongoDB, JWT Authentication, Cloudinary',
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
    tech: ['ReactJS, NextJS, Tailwind, Parallax Design, Responsive Layout'],
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
      'The weather application I developed is fully responsive and utilizes the OpenweathermapApi to provide accurate weather data. I utilized vanilla JavaScript to enhance my development skills, and incorporated location-based services to improve the user experience.',
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
