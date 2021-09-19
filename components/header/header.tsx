import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { ArticleInterface } from 'shared/interfaces/article.interface';

export const Header = ({ article }: { article: ArticleInterface }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.categories}>
        <li>
          <Link href="/">All articles</Link>
        </li>
        <li>
          <Link href="/tags/tag1">Articles Tag1</Link>
        </li>
        <li>
          <Link href="/tags/tag2">Articles Tag2</Link>
        </li>
        <li>
          <Link href="/tags/tag2">Articles Tag3</Link>
        </li>
      </ul>

      <div className={styles.featuredPost}>
        <Image
          src={`/articles/${article.thumbnail}.webp`}
          width="200px"
          height="150px"
          layout="responsive"
          alt={article.title}
        />

        <div className={styles.topRead}>
          <p>Latest article</p>
          <span className="date">{new Date(article.date).toLocaleDateString()}</span>
        </div>

        <h2 className={styles.h2}>{article.title}</h2>
        <div className={styles.readMore}>
          <Link href={`/articles/${article.slug}`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
    </header>
  );
};
