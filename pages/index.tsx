import React from 'react';
import Head from 'next/head';
import { Layout } from 'components/layout/layout';
import { Header } from 'components/header/header';
import {
  getLatestArticle,
  getListOfArticles,
  prepareFeaturedArticlesAndOtherArticles
} from 'services/articles';
import { ArticleInterface } from 'shared/interfaces/article.interface';
import { Articles } from 'components/articles/articles';
import { withHandleError } from 'shared/hoc/withHandleError';

export const getStaticProps = () => {
  const FEATURED_TAG: string = 'tag3';

  const [featuredArticles, articles]: [ArticleInterface[], ArticleInterface[]] =
    prepareFeaturedArticlesAndOtherArticles(getListOfArticles(), FEATURED_TAG);
  const latestArticle: ArticleInterface = getLatestArticle();

  return {
    props: { featuredArticles, articles, latestArticle }
  };
};

export default function Home({
  featuredArticles,
  articles,
  latestArticle
}: {
  featuredArticles: ArticleInterface[];
  articles: ArticleInterface[];
  latestArticle: ArticleInterface;
}) {
  const PrepareArticlesToDisplay = withHandleError(Articles);

  return (
    <Layout>
      <Head>
        <title>Blog - name</title>
      </Head>

      {latestArticle && <Header article={latestArticle} />}

      <PrepareArticlesToDisplay
        articles={articles.slice(0, 6)}
        featuredArticles={featuredArticles.slice(0, 3)}
      />
    </Layout>
  );
}
