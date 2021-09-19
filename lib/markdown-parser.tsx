import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { ArticleInterface } from 'shared/interfaces/article.interface';

export const getList = (path: string) => {
  const directory: string = join(process.cwd(), 'blog/' + path);
  const files: string[] = fs.readdirSync(directory);

  return files.map((file: string) => {
    const fullPath: string = join(directory, file);
    const fileContents: string = fs.readFileSync(fullPath, 'utf8');
    const { data }: { [key: string]: any } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};

export const getFileBySlug = async (path: string, slug: string): Promise<ArticleInterface> => {
  const directory: string = join(process.cwd(), 'blog/' + path);
  const fullPath: string = join(directory, `${slug}.md`);
  const fileContents: string = fs.readFileSync(fullPath, 'utf8');
  const { data, content: markdownContent }: { [key: string]: any } = matter(fileContents);
  let content: any = '';
  if (markdownContent) {
    content = await remark().use(html).process(markdownContent);
    content = content.toString();
  }

  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};
