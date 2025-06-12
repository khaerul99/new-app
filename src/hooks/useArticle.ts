import { useState, useEffect, useCallback } from 'react';
import type { Article } from '../types/article';
import * as articleService from '../services/articleService';

export const useArticle = (initialQuery: string) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>(initialQuery);
  const [inputValue, setInputValue] = useState('indonesia'); 

  console.log("seelah sinii oyy",articles);
  

   const onSearch = (value: string) => {
    if (value) {
      setQuery(value); // onSearch tetap bertugas men-trigger pencarian API
    }
  };

  // Fungsi BARU untuk menangani setiap ketikan
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await articleService.getArticles(query);
      setArticles(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Terjadi kesalahan');
      }
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    if (query) fetchArticles();
  }, [fetchArticles, query]);

  return { articles, loading, error, setQuery, inputValue, handleInputChange, onSearch};
};