import "./index.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import Logo from "../../assets/images/logo.png";
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const active = router.asPath === href ? "active" : "";

  const showNavHandler = () => {
    setShowNav(false);
  };

  const items = [
    {
      id: 1,
      link: "/",
      icon: faHome,
    },
    {
      id: 2,
      class: "about-link",
      link: "/about",
      icon: faUser,
    },
    {
      id: 3,
      class: "portfolio-link",
      link: "/portfolio",
      icon: faSuitcase,
    },
    {
      id: 4,
      class: "contact-link",
      link: "/contact",
      icon: faEnvelope,
    },
  ];

  return (
    <div className="nav-bar">
      <Link className="logo" href="/" onClick={showNavHandler}>
        <Image src={Logo} alt="Logo" />
        <Image className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={showNavHandler}
            passHref
          >
            <a className={`${active} ${item.class}`}>
              <FontAwesomeIcon icon={item.icon} color="#4d4d4e" />
            </a>
          </Link>
        ))}
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faSkype}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
Foot;

/* eslint-disable react/display-name */
// import { useState } from "react";
// import Link from "next";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { forwardRef, useRef } from "react";

// import Logo from "../../assets/images/logo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import {
//   faHome,
//   faUser,
//   faEnvelope,
//   faSuitcase,
//   faBars,
//   faClose,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//   const [showNav, setShowNav] = useState(false);
//   const router = useRouter();
//   const active = router.asPath === href ? "bg-[ffd700]" : "";

//   const showNavHandler = () => {
//     setShowNav(false);
//   };

//   const item = [
//     {
//       id: 1,
//       link: "/",
//       icon: faHome,
//     },
//     {
//       id: 2,
//       class: "after::content-[ABOUT]",
//       link: "/about",
//       icon: faUser,
//     },
//     {
//       id: 3,
//       class: "after::content-[PORTFOLIO]",
//       link: "/portfolio",
//       icon: faSuitcase,
//     },
//     {
//       id: 4,
//       class: "after::content-[CONTACT]",
//       link: "/contact",
//       icon: faEnvelope,
//     },
//   ];

//   return (
//     <div className="bg-[#181818] w-16 h-full aboslute top-0 z-[3] min-h-screen lg:bg-transparent lg:relative lg:h-auto lg:min-h-full ">
//       <Link className="block py-2" href="/" onClick={() => setShowNav(false)}>
//         <Image src={Logo} alt="Logo" />
//         {/* <Image className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
//       </Link>
//       <nav
//         className={`${
//           showNav ? "mobile-show" : ""
//         } lg:hidden lg:w-full lg:top-0 lg:left-0 lg:bg-[#181818] lg:h-full lg:m-0 lg:z-[2] lg:fixed`}
//       >
//         {item.map((item) => (
//           <Link key={item.id} href={item.link} passHref>
//             <a className={`${active} ${item.class}`} onClick={showNavHandler}>
//               <FontAwesomeIcon icon={item.icon} color="#4d4d4e" />
//             </a>
//           </Link>
//         ))}

//         <FontAwesomeIcon
//           onClick={showNavHandler}
//           icon={faClose}
//           color="#ffd700"
//           size="3x"
//           className="hidden"
//         />
//       </nav>
//       <ul className="lg:hidden">
//         <li>
//           <a
//             href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//         <li>
//           <a
//             href="https://github.com/bobangajicsm"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               color="#4d4d4e"
//               className="anchor-icon"
//             />
//           </a>
//         </li>
//       </ul>
//       <FontAwesomeIcon
//         onClick={() => setShowNav(true)}
//         icon={faBars}
//         color="#ffd700"
//         size="3x"
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default Sidebar;
