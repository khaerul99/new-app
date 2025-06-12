import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Image, Button, Alert } from 'antd';
import type { Article } from '../../types/article'; // Pastikan path ini sesuai dengan struktur proyek Anda
import Layout from '../../components/layout/Layout';

const { Title, Paragraph, Text } = Typography;

const ArticleDetail: React.FC = () => {
  const location = useLocation();
  const article = location.state?.article as Article;

  if (!article) {
    return (
      <>
        <Alert message="Artikel tidak ditemukan." type="warning" showIcon />
        <Link to="/"><Button type="primary" style={{ marginTop: 16 }}>Kembali</Button></Link>
      </>
    );
  }

  return (
    <Layout>
    <div className='flex flex-col p-5 mx-auto'>
      <Title level={2}>{article.title}</Title>
      <Text type="secondary">Oleh {article.author || 'Anonim'} | {new Date(article.publishedAt).toLocaleDateString()}</Text>
      <div className='md:w-2/3'>
      {article.urlToImage && <Image width="100%" src={article.urlToImage} alt={article.title} style={{ margin: '24px 0' }} />}
      </div>
      <div className='md:w-2/3'>
      <Paragraph style={{ fontSize: 16 }}>{article.content || 'Konten lengkap tidak tersedia.'}</Paragraph>
      </div>
      <a href={article.url} target="_blank" rel="noopener noreferrer"><Button type="primary">Baca Selengkapnya</Button></a>
    </div>
    </Layout>
  );
};
export default ArticleDetail;