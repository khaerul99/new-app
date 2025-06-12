import React from 'react';
import { List } from 'antd';
import { useArticle } from '../../hooks/useArticle';
import Loader from '../../components/common/Loader';
import ErrorMessage from '../../components/common/ErrorMessage';
import ArticleItem from '../../components/article/ArticleItem';
import Layout from '../../components/layout/Layout';


const ArticleList: React.FC = () => {
  const { articles, loading, error} = useArticle('indonesia');

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Layout>
    <div className=''>
      <List itemLayout="vertical" size="large" dataSource={articles} renderItem={(item) => <ArticleItem article={item} />} />
    </div>
    </Layout>
  );
};
export default ArticleList;