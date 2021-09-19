import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './articles.module.css';
import { ArticleInterface } from 'shared/interfaces/article.interface';

export const Article = ({ article }: { article: ArticleInterface }) => {
  return (
    <article className={styles.article}>
      <Link href={`/articles/${article.slug}`}>
        <a>
          <Image
            src={`/articles/${article.thumbnail}.webp`}
            width="200px"
            height="150px"
            layout="responsive"
            alt={article.title}
          />

          <div className={styles.meta}>
            <p>{article.author}</p>
            <span className="date">{new Date(article.date).toLocaleDateString()}</span>
          </div>

          <h3 className={styles.h3}>{article.title}</h3>
        </a>
      </Link>
    </article>
  );
};
