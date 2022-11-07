import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Home from '../components/Home/Home';
import { Fragment } from 'react';
import Header from '../components/Header';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
}
