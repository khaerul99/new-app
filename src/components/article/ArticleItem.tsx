import React from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import type { Article } from '../../types/article';  

interface Props { article: Article; }

const ArticleItem: React.FC<Props> = ({ article }) => (
  <List.Item
    key={article.title}
    extra={ article.urlToImage && <img width={272} alt="thumbnail" src={article.urlToImage} /> }
  >
    <List.Item.Meta
      title={<Link to={`/article/${encodeURIComponent(article.title)}`} state={{ article }}>{article.title}</Link>}
      description={article.description}
    />
    {article.author && `Oleh: ${article.author}`}
  </List.Item>
);
export default ArticleItem;