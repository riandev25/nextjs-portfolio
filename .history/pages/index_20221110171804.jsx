import Head from 'next/head';
import Image from 'next/image';
import Home from '../components/Home/Home';
import { Fragment } from 'react';
import Header from '../components/Header';
import About from '../components/About';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
    </Fragment>
  );
}
