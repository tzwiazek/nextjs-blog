import { NoArticles } from 'components/articles/no-articles';
import React, { ComponentType, FC } from 'react';
import { ArticlesInterface } from 'shared/interfaces/article.interface';

export const withHandleError =
  <P extends object>(WrappedArticlesComponent: ComponentType<P>): FC<P & ArticlesInterface> =>
  ({ articles, featuredArticles, ...props }: ArticlesInterface) => {
    if (articles.length === 0) {
      return <NoArticles />;
    }

    if (articles.length > 0 && featuredArticles.length === 0) {
      return <WrappedArticlesComponent articles={articles} {...(props as P)} />;
    }

    return (
      <>
        <WrappedArticlesComponent articles={articles.slice(0, 3)} {...(props as P)} />
        <WrappedArticlesComponent bg articles={featuredArticles} {...(props as P)} />
        <WrappedArticlesComponent articles={articles.slice(3, 6)} {...(props as P)} />
      </>
    );
  };
