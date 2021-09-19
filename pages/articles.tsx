import { Article } from 'components/articles/article';
import { Layout } from 'components/layout/layout';
import Head from 'next/head';
import React from 'react';
import { getListOfArticles } from 'services/articles';
import { ArticleInterface } from 'shared/interfaces/article.interface';
import styles from '../components/articles/articles.module.css';

export const getStaticProps = () => {
  const articles: ArticleInterface[] = getListOfArticles();

  return {
    props: { articles }
  };
};

const AboutUs = ({ articles }: { articles: ArticleInterface[] }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - All articles</title>
      </Head>

      <section className={styles.posts}>
        {articles.map((article: ArticleInterface) => {
          return <Article article={article} key={article.id} />;
        })}
      </section>
    </Layout>
  );
};

export default AboutUs;
