export const Weather = () => {
  const WEATHER_TITLE = 'Weather Application';
  const WEATHER_DESCRIPTION =
    'A fully responsive weather application. I built this project using OpenweathermapApi and to enhance my vanilla javascript skills. Open first the location of your device for better user experience';
  const WEATHER_TECH = ['HTML', 'CSS', 'Javascript'];
  const WEATHER_LINKS = [
    {
      id: 1,
      icon: faSquareArrowUpRight,
      link: 'https://riandev25.github.io/js-weather-app/dist/',
    },
    {
      id: 2,
      icon: faGithubAlt,
      link: 'https://riandev25.github.io/js-weather-app/dist/',
    },
  ];

  return { WEATHER_TITLE, WEATHER_DESCRIPTION, WEATHER_TECH, WEATHER_LINKS };
};
