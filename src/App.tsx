import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';

const route = createBrowserRouter([
  {
    path: '/',
    element: <ArticleList />
  },
  {
    path: "/article/:title",
    element: <ArticleDetail />
  },
]);


function App() {
  return (
    <RouterProvider router={route}/>
  );
}
export default App; 