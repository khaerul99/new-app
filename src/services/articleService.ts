import apiClient from '../contig/api';
import type { Article } from '../types/article';

interface NewsApiResponse { articles: Article[]; }

export const getArticles = async (query: string): Promise<Article[]> => {
  try {
    const response = await apiClient.get<NewsApiResponse>('/everything', {
      params: { q: query, apiKey: import.meta.env.VITE_NEWS_API_KEY, pageSize: 20 },
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw new Error('Gagal mengambil data berita. Cek kembali API Key Anda.');
  }
};

