import Head from 'next/head';
import Image from 'next/image';
import Home from '../components/Home';
import { Fragment } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contacts />
    </Fragment>
  );
}
