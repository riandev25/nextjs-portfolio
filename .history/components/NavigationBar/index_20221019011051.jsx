/* eslint-disable react/display-name */
import { useState } from "react";
import Link from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { forwardRef, useRef } from "react";

import Logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const active = router.asPath === href ? "bg-[ffd700]" : "";
  const ref = useRef();

  const showNavHandler = () => {
    setShowNav(false);
  };

  const item = [
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
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <Image src={Logo} alt="Logo" />
        <Image className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        {item.map((item) => (
          <Link key={item.id} href={item.link} passHref>
            <a className={`${active} ${item.class}`} onClick={showNavHandler}>
              <FontAwesomeIcon icon={item.icon} color="#4d4d4e" />
            </a>
          </Link>
        ))}

        <FontAwesomeIcon
          onClick={showNavHandler}
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
