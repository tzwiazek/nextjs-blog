import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from 'components/layout/layout';
import { getListOfArticles, getArticleBySlug } from 'services/articles';
import { ArticleInterface } from 'shared/interfaces/article.interface';
import styles from '../../components/articles/articles.module.css';

export const getStaticPaths = async () => {
  const articles: ArticleInterface[] = getListOfArticles();

  return {
    paths: articles.map((article: ArticleInterface) => ({ params: { slug: article.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req: { params: { slug: string } }) => {
  const { slug } = req.params;
  const article: ArticleInterface = await getArticleBySlug(slug);

  return {
    props: { article }
  };
};

const ArticleDetails = ({ article }: { article: ArticleInterface }) => {
  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <article className={`${styles.posts} ${styles.articleDetails}`}>
        <Image
          src={`/articles/${article.thumbnail}.webp`}
          width="200px"
          height="150px"
          layout="responsive"
          alt={article.title}
        />
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </Layout>
  );
};

export default ArticleDetails;
