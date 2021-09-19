import React from 'react';
import styles from './articles.module.css';
import { ArticleInterface, ArticlesInterface } from 'shared/interfaces/article.interface';
import { Article } from './article';
import Link from 'next/link';

export const Articles = ({ articles, bg }: ArticlesInterface) => {
  return (
    <>
      <section className={`${styles.posts} ${bg ? styles.bg : ''}`}>
        {bg && (
          <div className={styles.categoryContainer}>
            <h2>Articles Tag3</h2>
            <div className={styles.category}>
              <div className={styles.readMore}>
                <Link href="/tag3">
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          </div>
        )}

        {articles.map((article: ArticleInterface) => {
          return <Article article={article} key={article.id} />;
        })}
      </section>
    </>
  );
};
