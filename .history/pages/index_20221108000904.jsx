import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Home from '../components/Home/Home';
import { Fragment } from 'react';
import { Navbar } from 'flowbite-react';

export default function Page() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}
