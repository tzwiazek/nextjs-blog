export interface ArticleInterface {
  id: number;
  content: string;
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tags: string[];
  author: string;
  slug: any;
  createdAt: number | null;
}

export interface ArticlesInterface {
  articles: ArticleInterface[];
  bg?: boolean;
  featuredArticles: ArticleInterface[];
}
