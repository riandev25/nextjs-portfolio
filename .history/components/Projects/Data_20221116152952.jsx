import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import WeatherImage from '../../assets/images/projects/weather-app.png';
import PortfolioImage from '../../assets/images/projects/portfolio-image.png';
import SMSImage from '../../assets/images/projects/sms-image.png';

export const Weather = () => {
  const WEATHER_TITLE = 'Weather Application';
  const WEATHER_DESCRIPTION =
    'A fully responsive weather application. I built this project using OpenweathermapApi and to enhance my vanilla javascript skills. Open first the location of your device for better user experience';
  const WEATHER_TECH = ['HTML, CSS, Javascript'];
  const WEATHER_LINKS = [
    {
      id: 1,
      icon: faSquareArrowUpRight,
      caption: 'source code',
      link: 'https://riandev25.github.io/js-weather-app/dist/',
    },
    {
      id: 2,
      icon: faGithubAlt,
      caption: 'github',
      link: 'https://riandev25.github.io/js-weather-app/dist/',
    },
  ];
  const WEATHER_IMAGE = WeatherImage;

  return {
    WEATHER_TITLE,
    WEATHER_DESCRIPTION,
    WEATHER_TECH,
    WEATHER_LINKS,
    WEATHER_IMAGE,
  };
};

export const Portfolio = () => {
  const PORTFOLIO_TITLE = 'My Portfolio Website';
  const PORTFOLIO_DESCRIPTION =
    'I have built my portfolio website to showcase my projects and also to practice responsive web design and CSS animations. Soon will be converted to TypeScript';
  const PORTFOLIO_TECH = ['ReactJS, NextJS, Tailwind, Parallax Web Design'];
  const PORTFOLIO_LINKS = [
    {
      id: 1,
      icon: faSquareArrowUpRight,
      caption: 'source code',
      link: 'https://rianmiguelengracia.vercel.app/',
    },
    {
      id: 2,
      icon: faGithubAlt,
      caption: 'github',
      link: 'https://rianmiguelengracia.vercel.app/',
    },
  ];
  const PORTFOLIO_IMAGE = PortfolioImage;

  return {
    PORTFOLIO_TITLE,
    PORTFOLIO_DESCRIPTION,
    PORTFOLIO_TECH,
    PORTFOLIO_LINKS,
    PORTFOLIO_IMAGE,
  };
};

export const Sms = () => {
  const SMS_TITLE = 'School Management System';
  const SMS_DESCRIPTION =
    'A full stack web application school management system. Working: CRUD and Dashboard. Not yet implemented: Authentication, Email and Payment System. This personal project will be deployed soon';
  const SMS_TECH = [
    'ReactJS, NextJS, Tailwind, RTK Query, MongoDB, Responsive',
  ];
  const SMS_LINKS = [
    {
      id: 1,
      icon: faSquareArrowUpRight,
      caption: 'source code',
      link: 'https://github.com/riandev25/nextjs-school-management-system',
    },
    {
      id: 2,
      icon: faGithubAlt,
      caption: 'github',
      link: 'https://github.com/riandev25/nextjs-school-management-system',
    },
  ];
  const SMS_IMAGE = SMSImage;

  return {
    SMS_TITLE,
    SMS_DESCRIPTION,
    SMS_TECH,
    SMS_LINKS,
    SMS_IMAGE,
  };
};
