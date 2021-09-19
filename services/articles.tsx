import { getList, getFileBySlug } from 'lib/markdown-parser';
import { ArticleInterface } from 'shared/interfaces/article.interface';

export const getListOfArticles = (): ArticleInterface[] => {
  const articles: ArticleInterface[] = getList('articles');

  return articles
    .sort((a: ArticleInterface, b: ArticleInterface) => a.createdAt! - b.createdAt!)
    .reverse();
};

export const prepareFeaturedArticlesAndOtherArticles = (articles: any[], tag: string) => {
  if (articles.length === 0) {
    return [[], []];
  }

  articles.shift();
  return articles.reduce(
    (
      [featuredArticles, otherArticles]: [ArticleInterface[], ArticleInterface[]],
      article: ArticleInterface
    ) => {
      return article.tags.includes(tag)
        ? [[...featuredArticles, article], otherArticles]
        : [featuredArticles, [...otherArticles, article]];
    },
    [[], []]
  );
};

export const getLatestArticle = () => getListOfArticles()[0];

export const getArticlesWithTag = (tag: string): ArticleInterface[] => {
  const articlesWithTag: ArticleInterface[] = getListOfArticles().filter(
    (article: ArticleInterface) => article.tags.indexOf(tag) !== -1
  );

  return articlesWithTag;
};

export const getArticleBySlug = async (slug: string): Promise<ArticleInterface> => {
  const article: ArticleInterface = await getFileBySlug('articles', slug);

  return article;
};
