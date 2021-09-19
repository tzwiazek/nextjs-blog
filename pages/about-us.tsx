import { Layout } from 'components/layout/layout';
import Head from 'next/head';
import React from 'react';
import styles from '../components/articles/articles.module.css';

const AboutUs = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - about us</title>
      </Head>

      <section className={styles.posts}>
        <h1>About us h1 title</h1>
      </section>
    </Layout>
  );
};

export default AboutUs;
