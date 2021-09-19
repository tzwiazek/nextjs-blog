import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/layout/layout';
import { getListOfArticles, getArticlesWithTag } from 'services/articles';
import { ArticleInterface } from 'shared/interfaces/article.interface';
import styles from '../../components/articles/articles.module.css';
import { Article } from 'components/articles/article';

export const getStaticPaths = async () => {
  const articles: ArticleInterface[] = getListOfArticles();
  const arr: string[] = [];
  articles.map((article: ArticleInterface) => article.tags.map((tag: string) => arr.push(tag)));
  const uniqueTags: string[] = [...new Set(arr)];

  return {
    paths: uniqueTags.map((tag: string) => ({ params: { tag: tag } })),
    fallback: false
  };
};

export const getStaticProps = (req: { params: { tag: string } }) => {
  const { tag } = req.params;
  const articles: ArticleInterface[] = getArticlesWithTag(tag);

  return {
    props: { articles, tag }
  };
};

const TagPage = ({ articles, tag }: { articles: ArticleInterface[]; tag: string }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - All articles {tag}</title>
      </Head>

      <section className={styles.posts}>
        {articles.map((article: ArticleInterface) => {
          return <Article article={article} key={article.id} />;
        })}
      </section>
    </Layout>
  );
};

export default TagPage;
